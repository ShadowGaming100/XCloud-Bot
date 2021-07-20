 const Discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const client = new Discord.Client();
const fs = require("fs");
const colours = require("./JSON/colours.json");
const superagent = require("superagent")
const app = require('express')();
module.exports = client;

const token = process.env['TOKEN']

const config = require('./config.json')
let prefix = config.prefix;

const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  updateCountdownEvery:5000 ,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉"
  }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});



require('./server')
client.login(token); 
