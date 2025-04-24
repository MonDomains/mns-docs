# Subgraph
This is a page covering the graph’s MNS subgraph. The MNS subgraph indexes on-chain events of second-level .mon names. It allows us to build a reasonable approximation of the MNS names an address owns.

## The Graph
The Graph is a protocol for indexing and querying data from blockchains. There are multiple subgraphs that you can use to query information about MNS names. These subgraphs are available for monad-testnet.

Developers are welcome to use our rate limited API endpoints above for testing, but it is highly encouraged to [sign up for a free account with TheGraph](https://thegraph.com/studio/apikeys/) to get your own API key.

## GraphQL Schema
The schema for the MNS subgraph is defined in [/schema.graphql](https://github.com/mondomains/mns-subgraph/blob/master/schema.graphql).

## Use Cases
There are certain use cases where the graph is better for querying MNS specific information than through the resolution process. One of such use-cases is querying which NFT names are owned by a specific address.

## Example Queries
One can explore the following examples interactively via the [Graph Explorer Playground](https://thegraph.com/explorer/subgraphs/FCVSEukmVKanQbsnGaeDF9Pwn9Jyw7eHfYhPBkbJEj9z?view=Query&chain=arbitrum-one)

### Getting a list of names owned by an account

Ensure the address is lowercase

```gql
query getDomainsForAccount {
  domains(where: { owner: "0xa508c16666c5b8981fa46eb32784fccc01942a71" }) {
    name
  }
}
```

### Getting the top domain for an account based on the longest registry

```gql
query getDomainForAccount {
  account(id: "0xa508c16666c5b8981fa46eb32784fccc01942a71") {
    registrations(first: 1, orderBy: expiryDate, orderDirection: desc) {
      domain {
        name
      }
    }
    id
  }
}
```

#### return 

```json
{
  "data": {
    "account": {
      "registrations": [
        {
          "domain": {
            "name": "alice.mon"
          }
        }
      ],
      "id": "0xa508c16666c5b8981fa46eb32784fccc01942a71"
    }
  }
}
```

### Searching for a subdomain

```gql
query getSubDomains($Account: String = "alice.mon") {
  domains(where: { name: "alice.mon" }) {
    name
    id
    subdomains(first: 10) {
      name
    }
    subdomainCount
  }
}
```

#### return 

```json
{
  "data": {
    "domains": [
      {
        "name": "alice.mon",
        "id": "0x498ada62251a1227664ace8d97b0de2dcc6652ddf61e6fb5d3150f43ccf599e6",
        "subdomains": [
          {
            "name": "subgraphs.alice.mon"
          },
          {
            "name": "bd.alice.mon"
          }
        ],
        "subdomainCount": 2
      }
    ]
  }
}
```

### Getting the expiry of an MNS domain

```gql
query getDomainExp($Account: String = "sample.mon") {
  registrations(
    where: { domain_: { name: $Account } }
    first: 1
    orderBy: expiryDate
    orderDirection: desc
  ) {
    expiryDate
  }
}
```

#### return

```json
{
  "data": {
    "registrations": [
      {
        "expiryDate": "1714752524"
      }
    ]
  }
}
```