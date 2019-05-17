---
title: Installing a Qredit Forging Node
---
# Installing a Qredit Forging Node

This guide explains how to turn a Relay node into a Forging node. It will pick up where [this guide](http://docs.qredit.network/nodes/relay-node-install.html) ended.

### Register your wallet as a Delegate (Local Wallet)

1) Enter your local wallet and create an address. Make sure you back up your 12 Word Secret properly. Send at least 50 XQR to this newly generated address.

2) Select the wallet, and press the 3 dot menu in the upper right corner. Press "Register Delegate", choose a Username for the delegate and sign the transaction. In the same menu, select "2nd Passphrase". This is not required, but highly recommended. Make sure you also back up this Passphrase.

3) Vote with your delegate wallet, for your newly registered delegate. This will make sure your forged XQR will count towards your total voting weight.

After these steps, you need to configure your wallet to connect with your delegate address.

### Input your Secret (VPS)

1) After the relay is caught up with current height, it’s time to enter the secret and start the forger. 
IMPORTANT: Do not enter the brackets
```
ccontrol secret set [12-word-bip32-secret-phrase, each word divided by space]
ccontrol start forger
```

2)  Clear bash shell history to remove info about entered secret with the following command:
```bash
history -c
```

3) You’re all set. You can check forger logs with the following command. Note that this log only gives an output on start up, and when it is time for it to forge. Don't expect a running log like the Relay log
```bash
ccontrol logs forger
```

To show you a combined log of both the Relay and the Forger process
```bash
pm2 logs
```

::: tip
Remember that you will only forge when your delegate has earned enough votes to be in the Top51 of delegates.
:::