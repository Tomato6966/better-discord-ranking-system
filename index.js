const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const ranking = require("./ranking");         //load the ranking file
ranking(client);                              //call the ranking file with the client
client.login(config.TOKEN);                    //start the bot with the bot token
//Bot coded by Tomato#6966