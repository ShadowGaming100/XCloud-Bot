const client = require("../index");
const config = require('../config.json')
const prefix = config.prefix

client.on('ready', () => {
    var interval = setInterval (function () {
    var p = Math.floor(Math.random()*8);
    if(p==1){
        client.user.setActivity(`${client.guilds.cache.size} guilds`, { type: 'WATCHING' });
    }
    if(p==2){
        client.user.setActivity(`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Members`, { type: 'WATCHING' });
    }
    if(p==3){
        client.user.setActivity(`${prefix}help`, { type: 'PLAYING' });
  }
  if(p==4){
        client.user.setActivity(`Roles`, { type: "CUSTOM_STATUS" });
  }
  if(p==5){
        client.user.setActivity('Protecting Servers for Raid', { type: 'WATCHING' });
    }
  if(p==6){
        client.user.setActivity(`Bot Status`, { type: 'PLAYING' });
    }
    if(p==7){
        client.user.setActivity('Bot Made By GAMER BOY#0001', { type: 'PLAYING' });
    }
    if(p==8){
        client.user.setActivity('Support Server: https://discord.gg/3yQ5A5aD', { type: 'PLAYING' });
    }
    
}, 1 * 10000);
});