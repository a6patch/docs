---
title: Automatic Sharing with TBW
---

### Automatic Sharing with TBW

This is for setting up a TBW (true block weight) sharing delegate.  TBW is an accurate way of calculating rewards and it cannot be fooled with vote jumping like other methods. The TBW script we are using in this guide is written by delegate Goose.

### Setup

1. Update system to make sure Python version on the system is adequate (it has to be 3.6+)
```bash
sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
```

2. Switch to qredit user (or whatever user you used...we recommend qredit for consistancy)
```bash
sudo su - qredit
```

3. Install the TBW script (Qredit currently running ARK-Core 2.3)
```bash
git clone https://github.com/galperins4/core2_tbw
cd ~/core2_tbw/core/config
```

4. Open and fill out the config.json file
```bash
nano config
```

```json
{
  "start_block": current blockheight,
  "network": "qredit_mainnet",
  "delegate_ip": "ip",
  "dbusername": "qredit",
  "username": "delegate_name",
  "publicKey": "delegate_publickey",
  "interval": 211,
  "voter_share": 0.60,
  "passphrase": "SECRET",
  "secondphrase": "None",
  "voter_msg": "Delegate delegate_name - True Block Weight",
  "block_check": 30,
  "cover_tx_fees": "Y",
  "vote_cap" : 0,
  "vote_min" : 0,
  "fixed": {},
  "whitelist" : "N",
  "whitelist_addr" : ["addr"],
  "blacklist": "block",
  "blacklist_addr" : ["addr"],
  "blacklist_assign" : "addr",
  "min_payment": 1.0,
  "keep": {
    "reserve": 0.40
  },
  "pay_addresses": {
    "reserve": "reserve_address"
  }
}
```

### Fields
- start_block: You can select block at which you want to start sharing rewards.  This is IMPORTANT to get right.  To start the rewards *right now*, just check the explorer for the current block height. 
- network: Which network
- delegate_ip: IP of your VPS
- dbusername: Usually your OS username (qredit)
- publicKey: Public key of your delegate wallet
- interval: Payment interval every X blocks
- voter_share: Percentage to share with voters (0.xx format) 
- passphrase: Delegate passphrase
- secondphrase: Delegate second passphrase (only if you set one up...or None)
- voter_msg: Custom message for your voters
- block_check: How often you want the script to check for new blocks in seconds 
- cover_tx_fees: Use this to indicate if you want to cover transaction fees
- vote_cap: Use this if you cap voters for how much they can earn with votes 
- vote_min: Use this if you have a minimum wallet balance to be eligible for payments 
- fixed: Use this for fixed deals. This amount will be spread evenly over the set interval 
- whitelist: Y or N. Enable payment to only whitelisted addresses
- whitelist_addr: Comma separated list of addresses to allow voter payments to 
- blacklist: Details at: https://github.com/galperins4/core2_tbw
- blacklist_addr: Comma separated list of addresses to block from voter payments 
- blacklist_assign: Details at: https://github.com/galperins4/core2_tbw 
- min_payment: Minimum threshold for payment
- keep.reserve: Percentage to NOT share with voters (0.xx format) 
- pay_addresses.reserve: Reserve address (must be set, do not remove)

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
```

### IMPORTANT

If at any time you wish to change your share rate you must stop TBW, update your config.json and run the following command
```bash
 python3 tbw.py –shareChange
```
The script will ask for the prior share percentage, enter it like this "0.75" if you are changing *from* 75%
