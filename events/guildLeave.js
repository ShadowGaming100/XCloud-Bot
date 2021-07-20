const { MessageEmbed } = require('discord.js');
const client = require("../index")
client.on('guildDelete', guild =>{
    const channelId = '867023143737884680';
    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const leave = new MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} ${guild.id}`)
        .addField(`Members: ${guild.memberCount}`)
        .addField(`Channels : ${guild.channelCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(leave);
});
