# Frequently Asked Questions

### Is there any commitment process?

No. We removed the commitment process on MNS.

### Can I change the address my name points to after I’ve bought it?

Yes, you can update the addresses and other resources pointed to by your name at any time.
To update your name checkout the [MNS Manager App](https://dapp.monadns.com)

### Can I hold my name with one address, and point it at the other?

Yes, you can hold your name with one address and point it at another. Visit the [MNS Manager App](https://dapp.monadns.com) and update the appropriate address record for your name to point to the address you wish.

### Why are names registered as hashes?

Hashes provide a fixed length identifier that can easily be passed around between contracts with fixed overhead and no issues passing around variable-length strings.

Read more about [labelhash](/using-mns/name-processing), [namehash](/using-mns/name-processing).

### Once I own a name, can I create my own subdomains?

Currently We don’t support this feature but we will implement in the near future.

### What characters are supported?

MNS names are generally encoded using UTS-46. This means there is partial support for Unicode characters, including emoji.

However technically possible to register any name, names that are not valid UTS-46 will not be resolvable by most resolvers. Therefore it is generally recommended for apps that implement registration to limit the characters that can be registered to ensure a smooth experience.

To read more about supported characters [name normalization](/using-mns/name-processing#name-normalization).

### How long can I register a name for?

You can register a name for as long as you would like. There is no maximum registration duration.

### In what way could I lose access to my name?

The .mon registrar is built to ensure once issued, a name cannot be revoked or taken away from its owner. Potential loss can occur if the owner loses access to their private key, or if the owner forgets to renew their name.

### Can I register a TLD of my own within MNS?

Currently No. We do not support this feature. But We may implement in the feature.

### What happens if I forget to renew my name?

If you forget to renew your name, it will be released back to the public pool of available names. Luckily the expiration process has a 90 day grace period. This means that once the name expires the original owner has 90 days to renew the name before it is released. After the grace period, the name is released for registration by anyone. Unlike ENS, there is no premium period.

### What does it cost to register a .mon domain?

Currently, registration costs are set at the following prices;
- 5+ character .mon names: $5 in MON per year.
- 4 character .mon names: $50 in MON per year.
- 3 character .mon names: $100 in MON per year.

3 and 4 character names have higher pricing to reflect the small number of these names available.

### Why is my MNS name not appear in "Names" page?




