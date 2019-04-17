---
title: How to fix a Red Node
---

Sometimes, a node can go offline or fork of from the main network. In that case, manual steps are required to get your node up and running again. This guide will list the steps that will solve most problems. The steps will increase from minor to the nucleair option, so should be taken in this order.
This guide will assume you installed your node using core-control, since it is the recommended software to install a node

### Step 1) Restart the Node.

In most cases, a simple restart does the trick. First, log in to your server and change to user qredit.

Now type in the following command:
```
ccontrol restart all
```

Now, check if your node is catching up to the chain again. When your server reaches the same blockheight as is listed on the explorer, your node should forge a block again in the next round.
```
ccontrol logs
```

### Step 2) Rollback the Blockchain

When the first step didn't work, you should try to Rollback the chain a bit, to a point before your node forked. We will use the snapshot-client for this.

First, navigate to the snapshots-cli folder, and stop the node processes. 
cd ~/qredit-core/packages/core-snapshots-cli
ccontrol stop all

Now, select a blockheight that was before your node forked off. Put that blockheight in after --height, without seperation dots. After that, start the processes again. 
```
yarn rollback:mainnet --height xxxxxxx
ccontrol start all
```

.Now, the chain will roll back to your select height, and start syncing from that point again. Check the logs to see if you are back in sync again/
```
ccontrol logs
```

### Step 3) Restore from Snapshot

If that still didn't work, the next step is to restore your node using a snapshot. Every node runner is encouraged to keep multiple snapshots, so they can restore back to a point in time where the chain was still fine.
If you don't have a (recent) snapshot, you can skip this step.

Make sure your snapshot is in the correct directory (which is ~/snapshots) and has the correct name (which is qredit_mainnet)

Then, run the following command;
```
ccontrol snapshot restore
```

Check the logs again, just as in the previous steps. Your node should be catching up from the moment that the snapshot was taken.

### Step 4) Rebuild the Database

This is the nucleair option. It will delete your copy of the blockchain and force a complete resync. This resync will take a couple of hours to complete, and all this time, your node will stay red. Use it as a last resort.
This step will first stop the running services. Then it will erase the current database and create a new, empty one. The last command will start the services again and initialize the syncing.
```
ccontrol stop all
dropdb qredit_mainnet && createdb qredit_mainnet
ccontrol start all
```

After that, your node should start the resync. As always, you can check the progress in the logs.

In the rear that case all of the above steps did not work, it is smart to ask the Qredit Delegate Community if they have any ideas left to solve the offline status of your node.