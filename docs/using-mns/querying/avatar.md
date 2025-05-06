---
title: Getting User Avatar
lang: en-US
---

# Avatar Lookup

> Learn how to resolve avatar record with MNS.

## Getting a User Avatar

:::code-group
```js [Wagmi]
import { monadTestnet } from 'viem/chains';
import { createConfig, http } from 'wagmi'
import { normalize } from 'viem/ens';
import { getEnsAvatar } from '@wagmi/core'
 
const config = createConfig({
    chains: [monadTestnet],
    transports: {
      [monadTestnet.id]: http(), 
    },
});

// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65";
const avatar = await getEnsAvatar(config, { 
    name: normalize("0xalice.mon"),
    universalResolverAddress,
    chainId: monadTestnet.id,
});

console.log(avatar);
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

const getMnsAvatar = publicClient.getEnsAvatar;
const avatar = await getMnsAvatar({
  name: normalize('0xalice.mon'),
  universalResolverAddress
});

console.log(avatar)
```

```js [Ethers] 
import {Network, EnsPlugin, JsonRpcProvider} from "ethers";

// Registry contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const mnsRegistry = "0x6442eC5c3CCDaF112d6B78F9189cD111d516fE1E";
const network = new Network("Monad Testnet", 10143);
const plugin = new EnsPlugin(mnsRegistry, network.chainId);
network.attachPlugin(plugin);
const provider = new JsonRpcProvider("https://testnet-rpc.monad.xyz", network);
const avatar = await provider.getAvatar("0xalice.mon");
console.log(avatar);
```

:::