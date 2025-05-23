# Get started

MNS is compatible with ENS. so that means you can use ENS libraries on your application.

## Installation

:::code-group
 
```bash [Wagmi]
npm install wagmi viem
```
 
```bash  [Ethers]
npm install ethers
```

```bash  [Viem]
npm install viem
```

:::

## Showing the User Profile

The below codesnippet demonstrates how you can create a basic UserProfile section that shows the users MNS name and avatar.

```js [Wagmi]

import { useAccount, useEnsName as useMnsName, useEnsAvatar as useMnsAvatar } from 'wagmi';
import { monadTestnet } from 'viem/chains';
 
// deployed universal resolver contract address on Monad Testnet.  
const UNIVERSAL_RESOLVER_ADDRESS = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65"; 
 
export const MNS = () => {
    const { address } = useAccount();
    const { data: name } = useMnsName({ 
        address,
        universalResolverAddress: UNIVERSAL_RESOLVER_ADDRESS,
        chainId: monadTestnet.id
     });
    const { data: avatar } = useMnsAvatar({ 
        name,
        universalResolverAddress: UNIVERSAL_RESOLVER_ADDRESS,
        chainId: monadTestnet.id
    });
 
    return (
        <div className="flex items-center gap-2">
            <img
                src={avatar || 'fallback.svg'}
                className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-0 leading-3 pr-10">
                {name && <span className="font-bold">{name}</span>}
                <span>{address}</span>
            </div>
        </div>
    );
};

```
