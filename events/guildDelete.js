const { MessageEmbed } = require('discord.js');
const client = require("../index")
client.on('guildDelete', guild =>{
    const channelId = '867023143737884680';
    const channel = client.channels.cache.get(channelId); 
    
    if(!channel) return;  
    const leave = new MessageEmbed()
      .setThumbnail(guild.iconURL())

        .setTitle('I Left A Guild!')

        .setDescription(`Join log `)

        .addField(`Name`, `${guild.name}`)

        .addField(`ID`, `${guild.id}`)

        .addField(`Owner`, `${guild.owner}`)

        .addField(`Region`, `${guild.region}`)

        .addField(`Users`, `

        All ${guild.memberCount}

        Members

        Bots

        `)

        .addField(`Channels`, `${guild.channels.cache.size}`)

        .addField(`Roles`, `${guild.roles.cache.size}`)

        .addField(`Emojis`, `${guild.emojis.cache.size}`)

        .setTimestamp()

        .setColor('RANDOM')

        .setFooter(`${client.guilds.cache.size} Guild 

        ${client.users.cache.size} Members!`);
    channel.send(leave);
});
