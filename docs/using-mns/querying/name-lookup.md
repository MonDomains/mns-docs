---
title: Name Lookup
lang: en-US
---

# Name Lookup

> Learn how to resolve primary name from an address with MNS.

## Getting a Primary Name

Convert address to name.

> [!Warning]
> Important: After retrieving a name from reverse resolution, you must verify it by performing a forward resolution on that name to confirm it still resolves to the original address. This prevents spoofing or misconfiguration. If the addresses don't match, display the original address instead of the name.



:::code-group
```js [Wagmi]
import { monadTestnet } from 'viem/chains';
import { createConfig, http } from 'wagmi'
import { getEnsName as getMnsName } from '@wagmi/core'
 
const config = createConfig({
    chains: [monadTestnet],
    transports: {
      [monadTestnet.id]: http(), 
    },
});

// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65";
const address = await getMnsName(config, { 
    address: '0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252',
    universalResolverAddress,
    chainId: monadTestnet.id,
});

console.log(address)
```

```js [Viem]
import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'
import { monadTestnet } from 'viem/chains'
 
// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65"; 
const publicClient = createPublicClient({ 
  chain: monadTestnet,
  transport: http()
})

const getMnsName = publicClient.getEnsName;
const name = await getMnsName({
  address: "0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252",
  universalResolverAddress
});

console.log(name) 
```

```js [Ethers] 
import {Network, EnsPlugin, JsonRpcProvider} from "ethers";

// Registry contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const mnsRegistry = "0x6442eC5c3CCDaF112d6B78F9189cD111d516fE1E";
const network = new Network("Monad Testnet", 10143);
const plugin = new EnsPlugin(mnsRegistry, network.chainId);
network.attachPlugin(plugin);
const provider = new JsonRpcProvider("https://testnet-rpc.monad.xyz", network);
const name = await provider.lookupAddress("0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252");

console.log(name);

```

:::