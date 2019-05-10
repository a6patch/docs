---
title: Installing a Qredit Forging Node
---
# Installing a Qredit Forging Node

This guide explains how to turn a Relay node into a Forging node. It will pick up where [this guide ended](http://docs.qredit.network/nodes/relay-node-install.html)

## Register your wallet as a Delegate

Work in Progress

## Input your Secret

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
