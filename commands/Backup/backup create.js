const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../../config.json")
const backup = require("discord-backup");
backup.setStorageFolder("./database/backup/");
let prefix = config.prefix

module.exports = {
    name: 'backup create',
    aliases: ['bcreate', 'backup-create'],
    description: "Creates a backup",
    category: "Backup",
    run: async (client, message, args) => {

            if (!message.member.permissions.has("ADMINISTRATOR")) {
                return message.reply("You must be an administrator of this server to request a backup!").catch(e => console.log(e.stack.toString().red));
            }
            if (!message.guild.me.permissions.has("ADMINISTRATOR")) {
                return message.reply("I AM MISSING PERMISSIONS").catch(e => console.log(e.stack.toString().red));
            }

            message.reply("LOADING...")

            backup.create(message.guild, {
                jsonBeautify: true,
            }).then((backupData) => {
                message.reply(new MessageEmbed().setColor("GREEN").setTitle("BACKUP CREATED AND SAVED!").setDescription("You'll find the ID in your DMS"))
                message.author.send("The backup has been created! To load it, type this command on the server of your choice: `xcbackup load " + backupData.id + "`!");
            });
}
}