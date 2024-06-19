const Discord = require("discord.js");
const { prefix } = require("./config.json")

const client = new Discord.Client();
const fs = require("fs");
const colours = require("./JSON/colours.json");
const superagent = require("superagent")
const app = require('express')();
module.exports = client;
const token = process.env['TOKEN']
const config = require('./config.json')

client.on("message", async message => {
if(!message.guild) return;
  if(prefix === null) prefix = prefix;
  
  if(!message.content.startsWith(prefix)) return;
 
})

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
    storage: "./database/giveaway/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_SERVER", "ADMINISTRATOR" ],
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
