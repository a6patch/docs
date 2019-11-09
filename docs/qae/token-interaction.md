---
title: How to Interact with QAE, using the Qredit Desktop Wallet
---
# How to Interact with QAE, using the Qredit Desktop Wallet

This guide will learn you how to interact with QAE tokens using the Desktop Wallet. We will explain and show you the GENESIS, SEND and BURN transaction, all available to use with the Desktop Wallet.

## Creating a QAE token (GENESIS transaction)
If you want to create your own token on the Qredit Network, you first need to do a GENESIS transaction. In this transaction you register your token, and your token specific settings onto the blockchain. 

:::tip
The address you are using to make the transaction with, will be marked as the OWNER of the contract. This is important for the more advanced contract interactions, that are not (yet) supported by the desktop wallet. 

The cost of a Genesis Transaction, is 1.000,02 XQR. Make sure you have this in your wallet, before continueing.
:::

First, go to the QAE Interaction Screen, and select ```create new token (GENESIS)```.

![QAE Interaction Screen](./assets/token-interaction/token-qae-button.png)
![Select GENESIS Transaction Type](./assets/token-interaction/genesis-select.png)

A form will appear, where you can input your Token specific information. 

![GENESIS Transaction Form](./assets/token-interaction/genesis-form.png)

```json
Token Name                              The Name you want to give your Token 
Token Symbol (Ticker)                   The ticker or abbreviation you  want your Token to have
Token Amount                            The amount of Tokens you want to create. This will be your total supply
Token Decimals                          The amount of decimals in what your tokens can be divided
Token URI (optional)                    ?
Token Note (optional)                   This is a note that you can send with your transaction. Similar to the Qredit Smartbridge
Passphrase (or Encryption Password)     The Private key of the wallet. This is used to sign the transaction
```

When you have filled in and double checked all your information, press ```Next```. You will go to a confirmation screen. Make sure everything is filled in as you wish. After confirming, your transaction will be made, and can not be changed. If all is correct, select ```Send 1000.02 XQR```. Now, your transaction will be send to the Qredit Blockchain. 

![GENESIS Confirmation Screen](./assets/token-interaction/genesis-confirm.png)

After a few confirmation (usually within minutes), your transaction will be confirmed. You will now have your freshly minted Tokens into your wallet!


## Sending a QAE token (SEND transaction)
If you want to send any tokens you hold in your wallet to someone else, you can make a SEND transaction.

First, go to the QAE Interaction Screen, and select ```Send token (SEND)```.

![QAE Interaction Screen](./assets/token-interaction/token-qae-button.png)
![Select SEND Transaction Type](./assets/token-interaction/send-select.png)

A form will appear, where you can input which Token you want to send (select the dropdown to see all tokens that are present in the wallet). 

![SEND Transaction Form](./assets/token-interaction/send-form.png)

```json
Select Token                            Which Token you want to send. Select the dropdown to see all tokens that are present in the wallet
Token Amount                            The amount of Tokens you want to transfer
Token Note (optional)                   This is a note that you can send with your transaction. Similar to the Qredit Smartbridge
Recipient                               The Address of the person you want to send your tokens to
Passphrase (or Encryption Password)     The Private key of the wallet. This is used to sign the transaction
```

When you have filled in and double checked all your information, press ```Next```. You will go to a confirmation screen. Make sure everything is filled in as you wish. After confirming, your transaction will be made, and can not be changed. If all is correct, select ```Send 0.02000001 XQR```. Now, your transaction will be send to the Qredit Blockchain. 

![SEND Confirmation Screen](./assets/token-interaction/send-confirm.png)

After a few confirmations (usually within minutes), your token wallet will be deducted, and the Recipient of the transaction will see his token balance increased!

## Burning a QAE token (BURN transaction)
A BURN transaction is used to destroy a tokens existence. These tokens will disappear from the total supply of the token. Anyone who holds the token, can burn them. You do not have to be the owner of the contract for that.

Below, are screenshots of the forms you will encounter. Since they are pretty much the same as the SEND form, I will not insult your intelligence by explaining all the fields.

![QAE Interaction Screen](./assets/token-interaction/token-qae-button.png)
![Select BURN Transaction Type](./assets/token-interaction/burn-select.png)
![BURN Transaction Form](./assets/token-interaction/burn-form.png)
![BURN Confirmation Screen](./assets/token-interaction/burn-confirm.png)