---
title: How to Fix a Red Node
---
# How to Fix a Red Node

Sometimes, a node can go offline or fork of from the main network. In that case, manual steps are required to get your node up and running again. This guide will list the steps that will solve most problems. The steps will increase from minor to the nucleair option, so should be taken in this order.
This guide will assume you installed your node using core-control, since it is the recommended software to install a node

### 1) Restart the Node.
In most cases, a simple restart does the trick. First, log in to your server and change to user qredit.

Now type in the following command:
```
ccontrol restart all
```

Now, check if your node is catching up to the chain again. When your server reaches the same blockheight as is listed on the explorer, your node should forge a block again in the next round.
```
ccontrol logs
```
### 2) Check for Updates
If restarting the node did not work, it could be that the network just had a mandatory update, and your node forked because of it. To see if there are any updates, run the following command. If the second command echoes that you already run the latest Core version, skip the third command and proceed to the next step.
```bash
ccontrol update self
ccontrol update check
ccontrol update core
```

### 3) Rollback the Blockchain
When the first steps didn't work, you should try to Rollback the chain a bit, to a point before your node forked. 

Select a blockheight that was before your node forked off. Replace `[BLOCKHEIGHT]` for your chosen blockheight (without seperation dots). To check the current blockheight, check the [Explorer](https://explorer.qredit.io)
```
ccontrol rollback [BLOCKHEIGHT]
```
Now, the chain will roll back to your selected height, and start syncing from that point forward again. Check the logs to see if you are back in sync again.
```
ccontrol logs
```

### 4) Restore from Snapshot
If that still didn't work, the next step is to restore your node using a snapshot. Every node runner is encouraged to keep multiple snapshots, so they can restore back to a point in time where the chain was still fine.
If you don't have a (recent) snapshot, you can skip this step.

Make sure your snapshot-folder is in the correct directory (`~/.local/share/qredit-core/mainnet/snapshots`) and has the correct name (which is `1-blockheight at time of the snapshot`)

Then, run the following command;
```
ccontrol snapshot restore
```

Check the logs again, just as in the previous steps. Your node should be catching up from the moment that the snapshot was taken.

### 5) Rebuild the Database
This is the nucleair option. It will delete your copy of the blockchain and force a complete resync. This resync will take a couple of hours to complete, and all this time, your node will stay red. Use it as a last resort.
```
ccontrol database clear
ccontrol start all
```

After that, your node should start the resync. As always, you can check the progress in the logs.

### 6) Ask for Help
In the rare that case all of the above steps did not work, it is smart to ask the Qredit Delegate Community if they have any ideas left to solve the offline status of your node. Best place for this is either the Qredit Telegram channel, or the Hodler Enterprise Discord server