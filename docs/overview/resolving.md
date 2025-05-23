# Resolving

Resolving name/address is one of the major parts of MNS. Resolving process is converting a human-readable name to a machine-readable address or vice versa.

MNS system consists of two main paths: **Forward Resolution**, used to go from name to address (and load other extra data), and **Reverse Resolution**, used to go from address to name.

## Forward Resolution
Forwards resolution is the process of converting **from name to address**. As well as to load the records associated to a name. These records include but are not limited to **discord, twitter, github, email, timezone**, and more.

`
alice.mon ➡️
MON address: 0xd1...e252
BTC address: 1JnJv...BHwB
Twitter: @alice
`


Implementing forwards resolution in a dApp can be as simple as using a single line of code! To learn more about how to implement forwards resolution, check out the [Address Resolution documentation](/overview/resolving).

## Reverse Resolution

Reverse resolution is the process of converting **from address to name**. This is a crucial part of the MNS system, as it allows for any address, to be resolved into a human readable name. Instead of pages filled with addresses, you can now show the names of the people behind the addresses.

`0xd1...e252 ➡️ alice.mon`

Implementing reverse resolution in a dApp can be as simple as using a single line of code! To learn more about how to implement reverse resolution, check out the [Address Resolution documentation](/overview/resolving).



