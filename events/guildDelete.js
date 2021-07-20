const { MessageEmbed } = require('discord.js');
const client = require("../index")
client.on('guildDelete', guild =>{
    const channelId = '867023143737884680';
    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const leave = new MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`Guild`, `${guild.name}
        Id ${guild.id}`)
        .addField(`Members`, `${guild.memberCount}`)
        .addField(`Channels`, `${guild.channelCount}`)
        .addField(`Roles`, `${guild.roleCount}`)
        .addField(`Emojis`, `${guild.emojiCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`${client.guilds.cache.size} Guilds
        ${client.users.cache.size} Members!`);

    channel.send(leave);
});
