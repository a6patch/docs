---
title: Voting for a Public Pool
---
# Voting for a Public Pool

This article will explain the basic principles of public pools, and the script that is used to reward voters for their support.

### Introduction
If you are holding Qredit, you can earn some passive income with it. 
The only thing you need to do for this, is withdraw your coins into a wallet and vote for a delegate. That is it, the delegates will take care of the rest.
Every 8 seconds, a new block is forged and added to the blockchain by one of the 51 delegates. The delegates are awarded with 10XQR for every block they forge. Most delegates choose to share these rewards with their voters. Some nodes have private deals, while other pools are public.
Important to note, is that your funds are not locked when you are voting for a delegate. Except for the voting fee, your coin will never leave your wallet, and you can still move your coins freely. The payment script will notice balance changes in the wallet automatically, and change the payout accordingly.
You only need to cast your vote once. The wallet that you voted with, is then marked as "voting for delegate X" on the blockchain. When you do not want to vote for your delegate anymore, you can make an unvote transaction. 
This article will explain the inner workings of the sharing mechanism of the delegates, and specifically those of the public pools.

### What is True Block Weight
True Block Weight is a script that calculates the payout that is transferred to the voters. It basically checks every block that the delegate forges, which addresses voted for it, and with what amount. This ensures that every voter gets exactly the part of the reward he is entitled to.
The amount of coins that are held in a wallet that is voting for a delegate, is called "voting weight".

After a certain amount of blocks (211 for daily payouts, 1477 for weekly payouts) , configured by the owner of the delegate, the script automatically pays out this calculated number.
In the script, a delegate can choose the percentages he shares to his voters [SHARE] , and what part goes to his own wallet [RESERVE] . These numbers always add up to 100%.
The [SHARE] partition, gets spilt proportionately among all of the voting weight contributed to the delegate. These percentages can be found easily in the explorer, labeled "supply". [Example](https://explorer.qredit.io/#/wallets/QfA4zvUEZpLPrPRGAfeEU6M2upYpk8mDiR/voters/1)

Because of the fact that the rewards are calculated per block, but the delegate pays out after a certain amount of blocks, the first payout (after voting), and the last payout (after unvoting), can be different than expected. After you have voted the full cycle of the delegate, this will normalize.

### Example
This fictional delegate is sharing 80% of the rewards, daily. He has 2 voters, with 1000, and 3000 XQR respectively. 

After the delegate forges a block (reward = 10XQR), the script starts calculating. 
First, it looks at the [SHARE] & [RESERVE]. It takes 2 XQR for the delegate, and keeps 8XQR for the voters.
Then, the script looks at the total amount of votes (= 4000), and the individual votes (= 1000 & 3000). It determines that voter 1 is entitled to 1/4th of the share, and voter 2 should get 3/4th.
So voter 1 gets 8 x 0.25 = 2XQR, and voter 2 gets 8 x 0.75 = 6XQR.

All of these amounts are stored at a local database. After every forged block, this calculation is done again and gets added to the database. 
As soon as 211 blocks are forged, the payment part of the script gets triggered. It takes a look in the database, and collects all necessary data to create the transaction to the voters wallets, and the reserve wallet of the delegate.

::: tip
Only active delegates (in the top 51) are forging on the Qredit Network. If you have voted for a delegate that is/became on standby (outside of the top 51), they will not share any rewards. So it is worth it to check the delegate status regularly, to ensure you are still receiving payouts.
:::