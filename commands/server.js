const Discord = require('discord.js');
const guild = new Discord.Guild();
const config = require('../config.json');
const color = require('../config.json');

module.exports = {
	name: 'server',
	description: 'Displays information about the server.',
	execute(message) {
        const embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}`)
            .setAuthor("Author Name", `${message.guild.iconURL}`)
            .setColor(color.color)
            .setDescription(`Showing statistics for **${message.guild.name}**:`)
            .setThumbnail(`${message.guild.iconURL}`)
            .addField("Server name:", `${message.guild.name}`, true)
            .addField("Verified:", `${message.guild.verified}`, true)
            .addField("Total members:", `${message.guild.memberCount}`, true)
            .addField("Server ID", `${message.guild.name}`, true)
            .addField("Created", `By **${message.guild.owner.user.tag}** on ${message.guild.createdAt}`, true)
            .addField("AFK", `**Channel:** ${message.guild.afkChannel}\n **Timeout:** ${message.guild.afkTimeout} seconds.`, true)
            .addField("Region", `${message.guild.region}`, true);
        
		message.channel.send({embed});
	},
};

