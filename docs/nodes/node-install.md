---
title: Installing a Qredit Node
---
# Installing a Qredit Node


For V2, we recommend using Ubuntu 18.04. 
Since syncing the node for the first time is very CPU intensive, we recommend to use a VPS with at least 2CPU's
For an optimal P2P connection, we like all nodes to be located in Europe.

## Setup

1. Log in to your VPS

2. Enter the following command to apply the latest updates to your system
```
sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
```

3. Enter the following commands, executing them one by one, to add new user
```
sudo adduser qredit
sudo usermod -a -G sudo qredit
```

4. Switch to your newly created user (qredit)
``` 
su - qredit
```

5. The following are core-control installation commands, execute them one by one
``` 
git clone https://github.com/qredit/core-control
cd core-control
./ccontrol.sh install core
```

After running CoreControl for the first time, the script creates an alias called "ccontrol". After doing a reboot, you can use this alias from within any directory on your server. After the reboot, log into your qredit user again
```
sudo reboot
su - qredit
```

*OPTIONAL* If you have a locally maintained snapshot, this is the time to restore it. Place the snapshot in ~/snapshots, with the format "qredit_mainnet". Then run this command:
```
ccontrol snapshot restore
```

6. Command used in this step will start a relay and sync your node to current blockchain height. This step will take up to few hours, depending on your VPS setup and block height.
```
ccontrol start relay
```

7. After the relay is started you can check the synchronization progress with the following command. You can check current blockchain height by going to https://explorer.qredit.io/#/ and clicking on “latest blocks” tab. Latest downloaded blocks in relay logs will show as “Downloading blocks from height...”
```
ccontrol logs relay
```

8. Optional (but highly recommended), you can create a snapshot when the relay finishes synchronization, to restore your node in case of problems
```
ccontrol snapshot create
```

9. After the relay is caught up with current height, it’s time to enter the secret and start the forger. 
IMPORTANT: Do not enter the brackets
```
ccontrol secret set [12-word-bip32-secret-phrase, each word divided by space]
ccontrol start forger
```

10. Clear bash shell history to remove info about entered secret with the following command:
```bash
history -c
```

You’re all set. You can check forger logs with the following command: 
```bash
ccontrol logs forger
```

If your want your all of your (currently running) pm2 processes to start up in case your server (accidently) reboots, run the following commands:
```
pm2 save
pm2 startup
```
The last command will echo a command back. Copy, paste and run that command.

When you install a Qredit Full Node using CoreControl, it automatically sets an UFW Firewall, only allowing the neccesary ports for Qredit (which are port 22 for SSH access, and ports 4101-4108 for the Qredit processes). 
When / if you are using the server for other things, please remember to open the necessary ports.