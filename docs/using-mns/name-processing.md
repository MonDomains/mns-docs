# Name Processing 

When interacting with the MNS protocol smart-contracts directly it is important to note that names are not stored in their human readable format. In fact there are a few steps a name undergoes before it can be used by a smart-contract.

When building a dApp most of the time you don’t have to worry about name processing.

## Name Normalization
Normalization is the process of canonicalizing a name before running it through the Namehash algorithm. It is important to always normalize all input, because even one little difference (like a capital vs lowercase character) will cause the namehash to be completely different.

For example, `NaMe.MoN` normalizes to name.mon. This ensures that the correct Registry node is used, no matter how the user types in the name.

MNS names are validated and normalized using the `ENSIP-15` normalization algorithm.

Previously, `UTS-46` was used, but that is insufficient for emoji sequences. Correct emoji processing is only possible with `UTS-51`. The `ENSIP-15` normalization algorithm draws from those older Unicode standards, but also adds many other validation rules to prevent common spoofing techniques like inserting zero-width characters, or using confusable (look-alike) characters. See here for additional discussion on this: [Homogylphs](https://support.ens.domains/en/articles/7901658-homoglyphs)

A standard implementation of the algorithm is available at [@adraffy/ens-normalize](https://github.com/adraffy/ens-normalize.js). This library is used under the hood in [viem](https://viem.sh/docs/ens/utilities/normalize), [ENSjs](https://github.com/ensdomains/ensjs/blob/main/packages/ensjs/src/utils/normalise.ts#L27), and others.

```ts  // [viem]
import { normalize } from 'viem/ens';
// Uses @adraffy/ens-normalize under the hood
  
const normalized = normalize('ALiCe🚴‍♂️.mOn');
// => "alice🚴‍♂.mon"
```

If the name was not able to be normalized, then that method will throw an error. A name is valid if it is able to be normalized.

## Namehash

> [!IMPORTANT]
> You MUST normalize a name before you attempt to create a namehash! If you don't, then the hash you get may be incorrect. Some libraries like ensjs will automatically do this for you. 


In the core MNS registry, names are stored as a hash instead of the raw string to optimize for gas, performance, and more. This hashed value is typically referred to as a node. The node is a hex-encoded 32-byte value that is derived from the name using the namehash algorithm defined in `ENSIP-1`.

Namehash is a recursive algorithm that hashes each part of the name, then hashes the results together. Because recursive functions aren’t very efficient in Solidity, it’s usually best to derive the namehash offchain and pass to it a contract. Luckily, there are libraries that do this for us.

:::code-group
```ts [Viem (TS)]
import { namehash, normalize } from "viem/ens";
 
const normalizedName = normalize("name.mon");
const node = namehash(normalizedName);
```

```ts [Ethers]
import { ensNormalize as mnsNormalize, namehash } from "ethers/hash";
 
const normalizedName = mnsNormalize('name.mon')
const node = namehash(normalizedName)
```

```solidity [Solidity]
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
 
import "@ensdomains/ens-contracts/contracts/utils/NameEncoder.sol";
 
contract MyContract {
    function namehash(string calldata name) public pure returns (bytes32) {
        (, bytes32 node) = NameEncoder.dnsEncodeName(name);
        return node;
    }
}
```
:::

## Algorithm

The specification for the namehash algorithm was originally defined in `EIP-137` (same as `ENSIP-1`).

It’s a recursive algorithm that works its way down until you hit the root domain. For mns.mon, the algorithm works like so:

```
namehash('mns.mon') = keccak256(namehash('mon') + labelhash('mns'))
namehash('mon') = keccak256(namehash('') + labelhash('mon'))
namehash('') = 0x0000000000000000000000000000000000000000000000000000000000000000
```

That last line is a special case: The namehash for an empty string (representing the root domain) is 32 null bytes.

If you plug everything in above, you’ll end up with the final namehash value:

```
namehash('') = 0x0000000000000000000000000000000000000000000000000000000000000000
labelhash('mon') = keccak256('mon') 
    = 0x7d074ff60790193d6f1639a7404e70caff96bb1ae486f61939ce4e42695b49a1
namehash('mon') = keccak256(namehash('') + labelhash('mon')) 
    =  keccak256(0x00000000000000000000000000000000000000000000000000000000000000007d074ff60790193d6f1639a7404e70caff96bb1ae486f61939ce4e42695b49a1) 
        = 0xc6467acde3662083e12f3fbcf8aef57155a035e49629628eb9453948d1afb379
labelhash('mns') = keccak256('mns') 
    = 0xcca126147e5135c88a70e21a189c19200274d40391a772ac7b953f836468b45f
namehash('mns.mon') = keccak256(namehash('mon') + labelhash('mns')) 
    = keccak256(0xc6467acde3662083e12f3fbcf8aef57155a035e49629628eb9453948d1afb379cca126147e5135c88a70e21a189c19200274d40391a772ac7b953f836468b45f) =
```

**Result**: *0x4b0f178dddfa60cd4f0830ec9094ce87b72f28057b2802f16213c759aa3d8df4*

## Reverse Nodes

The Reverse Node is a node in the Registry that can be claimed for any Ethereum account. The name this node represents is `[addr].addr.reverse`, where `[addr]æ is the Ethereum public address (lowercase, without the “0x”). These reverse nodes are typically used to set a Primary Name for an account.

To generate the namehash for a reverse node:

- Take the input address and:
    - Remove the `“0x”` at the beginning
    - Convert all characters to lowercase
- Add `.addr.reverse` to the end
- Run this result through the `namehash` algorithm

For example, for address `0x481f50a5BdcCC0bc4322C4dca04301433dED50f0`, the name for the reverse node is:

`481f50a5bdccc0bc4322c4dca04301433ded50f0.addr.reverse`

And the resulting namehash for the reverse node is:

`0x58354ffdde6ac279f3a058aafbeeb14059bcb323a248fb338ee41f95fa544c86`

## Labelhash

> [!IMPORTANT]
> You MUST normalize a name before you attempt to create a labelhash! If you don't, then the hash you get may be incorrect.


Labelhash is the Keccak-256 hash of a single label (e.g. name in name.mon), used in places that don’t require the full name.

One example of where labelhash is used is in the BaseRegistar, since it only supports registering 2LDs (second-level domains, like name.mon) and not 3LDs+ (e.g. `sub.name.mon`). The token ID of a second-level .mon name in the BaseRegistar is the uint256 of the labelhash.


:::code-group
```ts [View]
import { labelhash, normalize } from "viem/ens";
 
const normalizedLabel = normalize("label");
const hash = labelhash(normalizedLabel);
````

```ts [Ethers]
import { keccak256 } from "ethers/crypto";
import { ensNormalize as mnsNormalize } from "ethers/hash";
import { toUtf8Bytes } from "ethers/utils";
 
const normalizedLabel = mnsNormalize('label')
const labelhash = keccak256(toUtf8Bytes(normalizedLabel))
```

```solidity [Solidity]
string constant label = "label";
bytes32 constant labelhash = keccak256(bytes(label));
:::







