---
title: Installing Qredit Node
---


### Installing Qredit Node

For V2, we recommend only using Ubuntu 18.04.
For an optimal P2P connection, we like all nodes to be located in Europe.

### Setup

1. Log in to your VPS.  Recommended terminal to use is Termius, Available for iOS, Android, macOS, Windows and Linux
(https://www.termius.com/)  

2. Enter the following command to apply the latest updates to your system
```bash
sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
```

3. Enter the following commands, executing them one by one, to add new user
```bash
sudo adduser qredit
sudo usermod -aG sudo qredit
sudo reboot
```

4. Disable root access for your system (for increased security); enter the following command
```bash
sudo passwd -l root
```

5. The following are core-control installation commands, execute them one by one
```bash 
git clone https://github.com/qredit/core-control
cd core-control
./ccontrol.sh install core
```

6. Command used in this step will start a relay and sync your node to current blockchain height. This step will take up to few hours, depending on your VPS setup and block height.
```bash
./ccontrol.sh start relay
```

7. After the relay is started you can check the synchronization progress with the following command. You can check current blockchain height by going to https://explorer.qredit.io/#/ and clicking on “latest blocks” tab. Latest downloaded blocks in relay logs will show as “Downloading blocks from height...”
```bash
./ccontrol.sh logs relay
```

8. Optionally, when the relay finishes synchronization, you can create a snapshot to faster restore the node in the case of problems
```bash
./ccontrol.sh snapshot create
```

9. After the relay is caught up with current height, it’s time to enter the secret and start the forger
```bash
./ccontrol.sh secret set [12-word-bip32-secret-phrase, each word divided by space]
./ccontrol.sh start forger
```

10. Optionally, clear bash shell history to remove info about entered secret with the following command:
```bash
history -c
```

You’re all set. You can check forger logs with the following command: 
```bash
./ccontrol.sh logs forger
```
