---
title: How to Install Custom Plugins on a Qredit Node
---
# How to Install Custom Plugins on a Qredit Node using Core-Control

Qredit supports the installation of custom plugins to be add to the Qredit Core. Since Core-Control version 2.5.1, it has become real easy to add these custom plugins to the Qredit Core. This guide will explain how to do that!

Special thanks to delegate Geops, for creating and maintaining the Core-Control software

### Prerequisites
- A fully synced and up to date Qredit Node
- The latest release of Core-Control
```bash
ccontrol update self
ccontrol update core
```

### Managing Plugins
To list all the currently supported Plugins run the following command
```bash
ccontrol plugin list
```
To add a plugin to your Core, type "ccontrol plugin add" and then the name of the plugin (as it appears in the list):
```bash
ccontrol plugin add "plugin-name"
```
This command will install the plugin, and add it to the configuration files of the Core. 

Please note, that the plugin that gets installed is the default implementation. But, most plugins will have extra customization options. To customize the plugin, it is best to go to the Github repository of the plugin. The Readme file there will have more detailed information on how to configure it further to your liking.


To update or remove a core plugin type the following commands:
```bash 
ccontrol plugin update "plugin-name"
ccontrol plugin remove "plugin-name"
```
::: tip
After you change anything plugin related, you need to restart the core for the changes to take effect
```bash
ccontrol restart all
```
:::


## List of currently supported Plugins
This is a list of current supported core plugins, and a link to their respective github repositories. Do you have a plugin you'd like to be added and available across all bridgechains? Contact Geops in the ARK Slack.

### Block-propagator, by delegate Alessio
<https://github.com/alessiodf/block-propagator>

 The block-propagator controls the propagation of forged blocks to obfuscate the source IP address of the block generator. This makes it harder for any attacker to work out the true IP address of a forging delegate as their blocks will be received from seemingly random IP addresses.

```bash
ccontrol plugin add block-propagator
```

### Round-monitor, by delegate Alessio
<https://github.com/alessiodf/round-monitor>

 The round-monitor adds a number of logging options. One of the main purposes of this plugin, is to determine the forging order of delegates in the current round, and to estimate how long is left until your delegate is due to forge. With this plugin configured, Core-Control can leverage a "Safe Restart", so that the forger does not miss any blocks during a restart. The plugin monitors how long is left until your delegate is due to forge in the current round, and schedule a restart at a time that will avoid missing your turn to forge. Use ```ccontrol restart safe``` for that.

```ccontrol update core``` will -after updating- automatically initiate a safe restart if the plugin is enabled and both Relay and Forger processes are running.
```bash
ccontrol plugin add round-monitor
```