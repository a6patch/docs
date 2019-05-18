---
title: Automatic Sharing with TBW
---
# Automatic Sharing with TBW

This is for setting up a TBW (true block weight) sharing delegate.  TBW is an accurate way of calculating rewards and it cannot be fooled with vote jumping like other methods. The TBW script we are using in this guide is written by delegate Goose.

### Setup

1. Update system to make sure Python version on the system is adequate (it has to be 3.6+)
```bash
sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
```

2. Switch to qredit user (or whatever user you used. We recommend qredit for consistancy)
```bash
su - qredit
```

3. Clone the TBW repository (Qredit currently running ARK-Core 2.3)
```bash
git clone https://github.com/galperins4/core2_tbw
```

4. Open and fill out the config.json file
```bash
cd ~/core2_tbw/core/config
nano config
```

```json
# atomic
ATOMIC = 100000000

# true block weight
START_BLOCK = current blockheight
NETWORK = "qredit_mainnet"
DATABASE_USER = "dbname"
DELEGATE = "delegate"
PUBLIC_KEY = "delegate publicKey"
INTERVAL = 211
VOTER_SHARE = 0.50
PASSPHRASE = "passphrase"
SECONDPHRASE = "None"
VOTER_MSG = "Delegate X - True Block Weight"
BLOCK_CHECK = 30
COVER_TX_FEE = "Y"
VOTE_CAP = 0
VOTE_MIN = 0
FIXED = "addr1:0,addr2:0"
WHITELIST = "N"
WHITELIST_ADDR = "addr1,addr2,addr3"
BLACKLIST = "block"
BLACKLIST_ADDR = "addr1,addr2,addr3"
BLACKLIST_ASSIGN = "addr"
MIN_PAYMENT = 0.5
KEEP = "reserve:0.25,second:0.25"
PAY_ADDRESSES = "reserve:addr1,second:addr2"

# pool
POOL_IP = "xx.xx.xx.xx"
EXPLORER = "https://explorer.qredit.io/"
COIN = "XQR"
PROPOSAL = "https://xx.xx.xx/"
POOL_PORT = 5000
CUSTOM_PORT = 5004
POOL_VERSION = "original"
```

### Fields
- START_BLOCK: You can select block at which you want to start sharing rewards.  This is IMPORTANT to get right.  To start the rewards *right now*, just check the explorer for the current block height. 
- NETWORK: Which network
- DATABASE_USER: Usually your OS username (qredit)
- DELEGATE = The Name of the Delegate you are setting up TBW for
- PUBLIC_KEY: Public key of your delegate wallet. Important: this is not the same as your Public Address
- INTERVAL: Payment interval every X blocks. Select 211 for Daily, or 1477 for Weekly payouts
- VOTER_SHARE: Percentage to share with voters (0.xx format) 
- PASSPHRASE: Your 12 word Delegate passphrase
- SECONDPHRASE: Delegate second passphrase (only if you set one up...or None)
- VOTER_MSG: Custom Smartbridge message for your voters
- BLOCK_CHECK: How often you want the script to check for new blocks in seconds 
- COVER_TX_FEE: Use this to indicate if you want to cover transaction fees
- VOTE_CAP: Use this if you cap voters for how much they can earn with votes 
- VOTE_MIN: Use this if you have a minimum wallet balance to be eligible for payments 
- FIXED: Use this for fixed deals. This amount will be spread evenly over the set interval 
- WHITELIST: Y or N. Enable payment to only whitelisted addresses
- WHITELIST_ADDR: Comma separated list of addresses to allow voter payments to 
- BLACKLIST: Options to "block" (ignore) a wallet, or to "assign" the rewards to another wallet
- BLACKLIST_ADDR: Comma separated list of addresses to block from voter payments 
- BLACKLIST_ASSIGN: Address you want the blacklisted wallets share to go to
- MIN_PAYMENT: Minimum threshold for payment
- KEEP: Percentage that will be paid to the Delegate (0.xx format)
- PAY_ADDRESSES: Reserve address (must be set, do not remove)

::: warning
Important: VOTER_SHARE and KEEP percentages combined must be 100% (1.00)
:::

If you want to setup a pool page (leave it as is if you do not): 
POOL_IP: Ip address of the node that is running the TBW script
EXPLORER: URL of the explorer you want to use
COIN: Name of the coin that is being shared
PROPOSAL: URL if you arew running a pool page
POOL_PORT: Ports that are being used to access the database
CUSTOM_PORT: 
POOL_VERSION: User Interface of the poolpage. You can choose "original" and "geops"

5. After editing all the necessary fields
```bash
Ctrl+O
Y to save changes
ENTER to confirm file name
Cntrl+X
```

6. After configuring the config.json file, you need to run the tbw script and install required packages
```bash
cd ~/core2_tbw
bash tbw.sh
-Select 1 (Install)
-Select 2 (Initialize)
-Select 4 (Start TBW only)
-Select 5 (Start Pay only)
-Select 7 (Start Pool only) (Optional; only if you configured it)
```

### Changing Share Percentage

::: warning
If at any time you wish to change your share rate you must stop TBW, update your config.json and run the following command
:::
```bash
cd ~/core2_tbw/core
python3 tbw.py –shareChange
```
The script will ask for the prior share percentage, enter it like this "0.75" if you are changing *from* 75%
