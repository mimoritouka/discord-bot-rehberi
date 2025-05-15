const { SlashCommandBuilder } = require('discord.js'); // https://discord.js.org/docs/packages/builders/1.11.2/SlashCommandBuilder:Class 
// https://nodejs.org/api/modules.html#modules_require_id

module.exports = {  // node.js'de başka dosyaların bu verileri kullanabilmesi için dışa aktarma yöntemidir https://nodejs.org/api/modules.html#modules_module_exports
	data: new SlashCommandBuilder() 
		.setName('ping')
		.setDescription('Replies with Pong!'), // Bu kısım komutun adını ve açıklamasını tanımlar
	async execute(interaction) { // komut kullanıldığında verilecek cevap
		await interaction.reply('Pong!');
	},
};
