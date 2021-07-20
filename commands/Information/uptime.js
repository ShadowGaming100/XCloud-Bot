
const { MessageEmbed } = require('discord.js');
const { parseDur } = require('../../functions');

module.exports = {
	name: 'uptime',
	description: 'Check how long has the bot been online.',
	category: 'Information',
	aliases: [ 'ontime', 'up'],
	usage: 'uptime',
	userperms: ['SEND_MESSAGES'],
	botperms: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const duration = parseDur(client.uptime);
		message.channel.send('⌛ Loading...').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle(':inbox_tray: Online for')
				.setColor('BLUE')
				.setDescription(
					`**${duration}**`,
				);
			msg.edit(pEmbed);
		});
	},
};