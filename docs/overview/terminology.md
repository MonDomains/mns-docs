# Terminology

## Name
An MNS identifier such as ‘alice.mon’. Names may consist of multiple parts, called labels, separated by dots. This also includes DNS names like name.xyz, or subnames like sub.name.mon.

## 2LD
Second-level domain. This refers to a subname/subdomain of a top-level domain. For example, name.mon and name.com are both second-level names. A subname of a 2LD is a third-level domain or 3LD.

## Subname / Subdomain
A child name like sub.name.mon, whose parent is name.mon. Also referred to as a “subdomain”. Every name (except for the root node) has a parent. For example, name.mon is a subname of mon.

`vault.luc.mon`

## TLD
Top-level domain. This refers to names like mon, com, xyz which lie at the “top” of the naming hierarchy.

`.mon .com .xyz`

## Controller
The account that may edit the records of a name. The Controller may be changed by the Registrant or Controller.

## Label
An individual component of a name, such as ‘alice’.

## Labelhash
The keccak256 hash of an individual label.

## Namehash
The algorithm used to process an MNS name and return a cryptographic hash uniquely identifying that name. Namehash takes a name as input and produces a node.

## Node
A cryptographic hash uniquely identifying a name.

## Owner
The owner of a name is the entity referenced in the MNS registry’s owner field. An owner may transfer ownership, set a resolver or TTL, and create or reassign subdomains.

## Record
A piece of information that an MNS name “resolves” to (points to). The most common record is the ETH Address record, which determines what ETH 0x address an MNS name points to.

## Registration
A registration is a registrar’s record of a user’s ownership of a name. This is distinct from the owner field in the Registry; registrations are maintained in the registrar contract and additionally store information on expiry date, fees paid, etc.

## Registrar
A registrar is a contract responsible for allocating subdomains. Registrars can be configured at any level of MNS, and are pointed to by the owner field of the registry.

## Registrant
The owner of a registration. The registrant may transfer the registration, set the Controller, and reclaim ownership of the name in the registry if required.

## Registry
The core contract of MNS, the registry maintains a mapping from domain name (at any level – x, y.x, z.y.x etc) to owner, resolver, and time-to-live. All lookups start with the Registry.

## Expiry
The date and time at which an MNS name expires. The implications of expiration depend on the type of name it is. When a .mon 2LD expires (and its grace period elapses), then you lose ownership of the name. When a wrapped subname expires, you may or may not lose ownership, depending on whether the name was emancipated.

## Grace Period
This is a short window of time after an MNS .mon name expires, in which the owner can still renew and retain the name. Currently this window is 90 days.

## TTL
Stands for “Time To Live”. This is a field in the core registry that can be set alongside the resolver. It can be used as a hint for clients to decide how long to cache resolved data.

## Resolver
A resolver is a contract that maps from name to the resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry.

## Public Resolver
This is a standard resolver contract implementation written by ENS Labs. It supports all record types and anyone can use it. This is the default resolver used when registering a new name via the official manager app.

## Primary Name
The MNS name that you want a particular ETH account to be associated with. When set, it will be displayed instead of your 0x address on integrating websites/apps. This is also often referred to as the “reverse record”.

## Reverse Node
A node in the Registry that can be claimed for any Ethereum account. The name this node represents is [addr].addr.reverse, where [addr] is the Ethereum public address (lowercase, without the “0x”). These reverse nodes are typically used to set a Primary Name for an account.

## Reverse Record
Usually, this is referring to the Primary Name. Technically speaking, a Reverse Node can have multiple records set on `itc3aq<`, the same as any node.

## Wrapped Name
The MNS Name Wrapper is a contract for ENS that allows you to “wrap” any MNS name into a ERC-1155 NFT. This includes not only .eth 2LDs like name.mon, subnames like sub.name.mon.

## Fuse
The technical term for a specific “permission” bit for a wrapped name. As the name implies, once that bit is flipped on, the fuse is burnt and cannot be unburnt (unless the name expires).

## Subgraph
An indexed collection of data using TheGraph protocol. In this documentation portal, “the subgraph” usually refers to the official MNS subgraph. This is a useful offchain service that allows clients to query for information about names or accounts.