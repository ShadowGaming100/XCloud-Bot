const { MessageEmbed } = require('discord.js');
const client = require("../index")
client.on('guildCreate', guild =>{

    const channelId = '867023143737884680'; 

    const channel = client.channels.cache.get(channelId); 
     
    if(!channel) return; 
    const join = new MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`Guild`, `Name ${guild.name}
        Id ${guild.id}`)
        .addField(`Members`, `${guild.memberCount}`)
        .addField(`Channels`, `${guild.channelCount}`)
        .addField(`Roles`, `${guild.roleCount}`)
        .addField
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`${client.guilds.cache.size} Guilds
        ${client.users.cache.size} Members!`);
    channel.send(join);
});
