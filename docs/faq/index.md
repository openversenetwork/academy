
# Frequently Asked Questions


## General



<details>

<summary><b>What is a faucet? Where can I find the official Openverse mainnet faucet?</b></summary>

A faucet is an application that dispenses small amounts of cryptocurrencies to users for free. The purpose of a faucet is to introduce new users to a cryptocurrency by giving them a small amount of tokens to play with, and to encourage them to explore the network’s features and potential use cases.

You can claim from the official Openverse faucet in the faucet channel found in our Discord server.

</details>

<details>

<summary><b>Where can I find projects/dApps that are part of the Openverse ecosystem?</b></summary>

You can discover all the Web3 apps and projects built in the Openverse ecosystem, such as wallets, bridges and decentralized exchanges on our official [ecosystem page](https://openverse.network/ecosystem).

</details>

<details>

<summary><b>What bridges are available on Openverse?</b></summary>

Some examples are:

- [Satellite](https://satellite.money/) Bridge
- [Gravity](https://bridge.blockscape.network/) Bridge

</details>

<details>

<summary><b>What does the Openverse token supply look like?</b></summary>

Openverse started with an initial supply of 200 million tokens at genesis and is scheduled to issue 1 billion Openverse tokens in total under an exponential decay schedule in a span of 4 years starting from genesis.
More information on the Openverse Token Model can be found [here](https://medium.com/openverse/the-evmos-token-model-edc07014978b).

</details>

<details>

<summary><b>What is meant by the Openverse Half-Life?</b></summary>

The “half-life” in the Openverse token model is an exponential formula that refers to the rate at which new tokens are minted on a daily basis (per epoch).
The countdown to the Half-Life refers to the yearly reduction of the inflation rate.
A more detailed breakdown on the Half-Life/inflation can be found [here](https://docs.openverse.network/protocol/modules/inflation#exponential-inflation---the-half-life).

</details>

<details>

<summary><b>Where can I find more information about the Openverse Token Model?</b></summary>

A detailed breakdown of the Openverse token model can be found [here](https://medium.com/openverse/the-evmos-token-model-edc07014978b).

</details>

<details>

<summary><b>Where can I find data about the Openverse network and its parameters, such as the staking APR, Inflation and validator list?</b></summary>

[Mintscan](https://www.mintscan.io/openverse) is a great way to find information and data on the Openverse network (or other Cosmos chains). Another example would be [SmartStake](https://openverse.smartstake.io/). 

</details>

<details>

<summary><b>Where can I read about the newest developments and partnerships of Openverse?</b></summary>

Articles published by the Openverse team can be found on the Openverse [Medium page](https://medium.com/@Openverse).

</details>

<details>

<summary><b>I have a marketing proposal. Whom do I reach out to?</b></summary>

You may send your proposal to https://t.me/liamdig on Telegram via direct message.

</details>




## Wallets / Addresses

<details>

<summary><b>Which wallets can I use for Openverse?</b></summary>

You can find an overview of Openverse-compatible wallets [here](https://docs.openverse.network/use/wallet).

</details>

<details>

<summary><b>How do I connect Openverse to my wallet?</b></summary>

Guides on how to add the Openverse network to your wallet:

- Metamask [guide](https://docs.openverse.network/use/connect-your-wallet/metamask)
- Keplr [guide](https://www.notion.so/FAQ-6120cf83326942a498862aabab5a49c1)

</details>

<details>

<summary><b>Can I use Ledger with Openverse?</b></summary>

Yes. A guide on how to start using Ledger with Openverse can be found [here](https://docs.openverse.network/use/connect-your-wallet/ledger).

</details>

<details>

<summary><b>Why are there 2 different types of Openverse addresses on Keplr?</b></summary>

Keplr supports two different types of Openverse addresses: the EVM compatible (hex) address and the Cosmos SDK (bech32) address.

The EVM compatible address is the address format used by the Ethereum network, and it starts with "0x". This format is widely used in the Ethereum ecosystem and is recognized by many wallets and applications.

The Cosmos SDK address is the address format used by the Cosmos network, which Openverse is built on. This format starts with "openverse1". This format is specific to the Cosmos ecosystem and is not widely recognized by wallets and applications outside of it. However, it is used by Openverse to interact with the Cosmos ecosystem, including staking, governance, and other features.

Keplr supports both address formats to provide users with a more seamless experience when using Openverse. Users can easily switch between the two formats when interacting with different types of applications on the Openverse network.

Both formats represent the same address/account.

</details>

<details>

<summary><b>Can I use the same Openverse address/account on both Metamask and Keplr at the same time?</b></summary>

Yes, you can use the same Openverse address on both Metamask and Keplr at the same time. This is because Openverse is a blockchain network that supports both EVM and Cosmos networks.

Both Metamask and Keplr allow you to import your Openverse address by using your private key or seed phrase, which means that you can access your account on either wallet.

However, keep in mind that you should always keep your private key or seed phrase secure and not share it with anyone. Additionally, it's always a good idea to have a backup of your private key or seed phrase in case you lose access to one of your wallets.

</details>

<details>

<summary><b>Are there any mobile wallet apps that support IBC transfers?</b></summary>

Yes, Cypher wallet and Cosmostation wallet both support IBC transfers.

</details>

## Staking

<details>

<summary><b>Is there a difference between (un/re)staking, (un/re)bonding  and (un/re)delegating?</b></summary>

No. Staking, bonding and delegating all refer to the process of locking tokens to participate in a proof-of-stake (PoS) blockchain network and earn token rewards for supporting the network.

</details>

<details>

<summary><b>How long does the unbonding process take on the Openverse network?</b></summary>

The time it takes to unstake tokens on the Openverse network is set to 14 days, during which no staking rewards are earned.

</details>

<details>

<summary><b>Why is there a 2-week period to unbond my staked tokens? What happens during those 2 weeks?</b></summary>

The reasoning behind having an unbonding period is the following:

1. To enforce the solution to the nothing-at-stake problem
2. To protect against long-range attacks

The unbonding period of 2 weeks is artificial and is set by governance.

</details>

<details>

<summary><b>I accidentally undelegated my Openverse tokens. Can I cancel the undelegation process?</b></summary>

Yes, you can do so via [Disperze](https://openverse.disperze.network/welcome), which is a third-party dashboard for the Openverse network.

</details>

<details>

<summary><b>Where can I check the time left until my staked tokens are fully unbonded?</b></summary>

1. Navigate to [https://www.mintscan.io/openverse](https://www.mintscan.io/openverse) 
2. Search for your Openverse address using the search bar
3. Click on the “Unbondings” tab

</details>

<details>

<summary><b>Does it also take 14 days to re-delegate my tokens to a different validator?</b></summary>

This depends. If it is your first time re-delegating your tokens, the redelegation process is instant. However, if you have redelegated Openverse tokens before, the process will take 14-days (during which no tokens will be earned).

</details>

## Support

<details>

<summary><b>I’m having an issue. Where can I ask for help?</b></summary>

The easiest and fastest way to get support is by opening a [support-ticket](https://discord.com/channels/809048090249134080/976564857048559636)
 on our official [Discord](https://discord.com/invite/openverse) server. 

</details>

<details>

<summary><b>Is there a list of support links for projects across the Openverse ecosystem?</b></summary>

A spreadsheet containing support links for various projects built on Openverse can be found [here](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vTorkGD3Wmp5QxbIwzYcgemyxFNIdmuBr2D8T_9WEKkjsUvKCvavuZgmLor8RtpmVMA9BvzAuWmruKf/pubhtml). This page is maintained by our moderators.

</details>

<details>

<summary><b>I can’t see my funds on the assets page / can’t connect my wallet.</b></summary>

Clearing browser cache or a hard refresh should help solve this problem. If not, reach out to the Openverse support team on Discord.

</details>

<details>

<summary><b>How can I withdraw tokens from Osmosis to Openverse and vice versa?</b></summary>

To withdraw or deposit (IBC transfer) any assets to and from Openverse you can use the official [asset](https://app.openverse.network/assets) page found on the Openverse website.

</details>

<details>

<summary><b>How can I download my Openverse transaction history in CSV?</b></summary>

[StakeTax](https://stake.tax/) supports Openverse and other chains in Cosmos.

</details>

<details>

<summary><b>where can I find the official Openverse Logo Kit?</b></summary>

The Openverse Press Kit can be found [here](https://drive.google.com/drive/folders/1fw9a8DgLJ0X-LuI4hHG36JkMC9eFGJL6). Make sure to follow the guidelines mentioned in the PDF file when making use of the kit.

</details>

<details>

<summary><b>How do I change the Openverse RPC in Metamask?</b></summary>

To change your RPC follow this [guide](https://www.reddit.com/r/EVMOS/comments/x5y7j4/how_to_change_your_rpc/).

</details>

<details>

<summary><b>My staked tokens unbonded themselves. What is happening?</b></summary>

This most likely means that your private key has been compromised. If you are a victim of theft and have staked tokens, act quickly! The staked assets may still be recoverable. Contact either [Cosmoshield](https://cosmoshield.org/) or [Cosmos Rescue](https://cosmosrescue.com/) as soon as you become aware of the theft attempt.

Alternatively, you can contact our moderators in the [Discord](https://discord.gg/openverse) server and ask for assistance.

</details>