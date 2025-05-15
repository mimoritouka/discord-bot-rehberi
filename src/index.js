// Gerekli modülleri çağır
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config(); // .env dosyasından değişkenleri alır

// fs: Dosya sistemini okumamıza yarar

// path: Dosya yollarını işletim sistemine uygun biçimde oluşturur

// Collection: Komutları tutmak için özel bir liste yapısı



// .env dosyasındaki tokeni al
const token = process.env.DISCORD_TOKEN;

// Yeni bir Discord client'ı oluştur
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Ya kardeş bu intentsleri görüncede ay noluyor diyorsun
// şimdi 

// Komutları tutacağımız yer
client.commands = new Collection();

// komutları klasörden yükle (commands/ alt klasörleriyle birlikte)
const foldersPath = path.join(__dirname, 'commands'); // https://nodejs.org/api/path.html
const commandFolders = fs.readdirSync(foldersPath); // https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);

		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[UYARI] ${filePath} komutu "data" veya "execute" içermiyor.`);
		}
	}
}

// Bot hazır olduğunda bu çalışır (once 1 kez demek)
client.once(Events.ClientReady, readyClient => {
	console.log(`Login: ${readyClient.user.tag}`);
});

// Slash komutlara cevap verir
client.on(Events.InteractionCreate, async interaction => { // https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#interactionCreate
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`Komut bulunamadı: ${interaction.commandName}`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'Komut çalıştırılırken hata oluştu!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'Komut çalıştırılırken hata oluştu!', ephemeral: true });
		}
	}
});

// Discord'a giriş yap
client.login(token);
