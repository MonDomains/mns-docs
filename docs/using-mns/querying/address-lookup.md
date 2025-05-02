---
title: Address Lookup
lang: en-US
---

# Address Lookup

> Learn how to resolve blockchain addresses from human-readable names with MNS.

## Getting the users Monad Address

Use human-readable names instead of long machine-readable addresses.

:::code-group
```js [Wagmi]
import { monadTestnet } from 'viem/chains';
import { normalize } from 'viem/ens';
import { createConfig, http } from 'wagmi'
import { getEnsAddress as getMnsAddress } from '@wagmi/core'
 
const config = createConfig({
    chains: [monadTestnet],
    transports: {
      [monadTestnet.id]: http(), 
    },
});

// UniversalResolver contract address (mainnet or testnet) of the MNS. To get the address visit deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65";
const address = await getMnsAddress(config, { 
    name: normalize('0xalice.mon'),
    universalResolverAddress,
    chainId: monadTestnet.id,
});

console.log(address)
 
```

```js [Viem]
import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'
import { monadTestnet } from 'viem/chains'
 
// UniversalResolver contract address (mainnet or testnet) of the MNS. To get the address visit deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65"; 
const publicClient = createPublicClient({ 
  chain: monadTestnet,
  transport: http()
})

const getMnsAddress = publicClient.getEnsAddress;
const address = await getMnsAddress({
  name: normalize('0xalice.mon'),
  universalResolverAddress
});

console.log(address)
 
```

```js [Ethers]
 import {Network, EnsPlugin, JsonRpcProvider} from "ethers";

// Registry contract address (mainnet or testnet) of the MNS. To get the address visit deployments page page
const mnsRegistry = "0x6442eC5c3CCDaF112d6B78F9189cD111d516fE1E";
const network = new Network("Monad Testnet", 10143);
const plugin = new EnsPlugin(mnsRegistry, network.chainId);
network.attachPlugin(plugin);
const provider = new JsonRpcProvider("https://testnet-rpc.monad.xyz", network);
const address = await provider.resolveName("0xalice.mon");

console.log(address);


```

:::



