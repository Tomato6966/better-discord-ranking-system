# Better-Discord-Ranking-System

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Tomato6966/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Tomato6966/Ask-Me-Anything)
[![Support Server](https://img.shields.io/discord/591914197219016707.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/fS6qBSm)

An easy to setup and easy to use Welcome System Bot for Discord.js with the package `canvas`

## [**DISCORD SUPPORT SERVER INVITE**](https://support.milrato.eu)

## Installation | How to use the Bot

 **1.** Install [node.js v12+](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Download this repo and unzip it    |    or git clone it
 
 **3.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install discord.js canvacord enmap`**
 
 **3.1** Fill in everything in config.json
 
 **4.** start the bot with **`node index.js`**

### Usage - index.js

```javascript
const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const ranking = require("./ranking");          //load the ranking file
ranking(client);                               //call the ranking file with the client
client.login(config.TOKEN);                    //start the bot with the bot token
```

### Usage - config.json
- "TOKEN"           ... is your Bot token
- "PREFIX"          ... is the PREFIX for the commands
- "maximum_leaderboard" ... is the maximum amount of users listed on the leaderboard cmd
- "embedcolor"      ... is the color of your embeds

```json
{
    "TOKEN": "NzQ4MDk22135412OTY5.X0Yc2g.masd2pFasdasd2Urh3X0S_2yuBo",
    "PREFIX": "?",

    "maximum_leaderboard": "50",
    "embedcolor": "#118fff"
}
```

#### **NOTE:**

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*

<br/>
  
***

## [Discord Server 😎](https://discord.gg/milrato) | [Website](https://milrato.dev)
<a href="https://discord.gg/milrato"><img src="https://discord.com/api/guilds/773668217163218944/widget.png?style=banner2"></a>

***

## SUPPORT ME AND MILRATO DEVELOPMENT

> You can always Support me by inviting one of my **own Discord Bots**

[![2021's best Music Bot | Lava Music](https://cdn.discordapp.com/attachments/748533465972080670/817088638780440579/test3.png)](https://lava.milrato.dev)
[![Musicium Music Bot](https://cdn.discordapp.com/attachments/742446682381221938/770055673965707264/test1.png)](https://musicium.musicium.dev)
[![Milrato Multi Bot](https://cdn.discordapp.com/attachments/742446682381221938/770056826724679680/test1.png)](https://milrato.milrato.dev)

# Credits

> If consider using this Bot, make sure to credit me!
