const backup = require('discord-backup');
module.exports = {
    name: "backup-create",
    aliases: ["bc", "bcreate"],
    category: "backup",
    usage: "qbackup-create",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

        message.author.send('Backup created! Here is your ID: `'+backupData.id+'` Use `qload-backup '+backupData.id+'` to load the backup on another server!');
        message.channel.send(":white_check_mark: Check your dm for backup id");

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');
})
}
}
