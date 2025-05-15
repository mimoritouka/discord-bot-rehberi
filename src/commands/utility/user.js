const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user → komutu kullanan kullanıcıyı temsil eder.
		// interaction.member → sunucudaki üye objesidir.
		await interaction.reply(`Bu komutu kullanan: ${interaction.user.username}, sunucuya katıldığı tarih: ${interaction.member.joinedAt}`);
	},
};
