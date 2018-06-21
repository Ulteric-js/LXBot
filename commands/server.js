const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let guildEmbed = new Discord.RichEmbed()
    .setTitle(`LXBot has joined ${client.guilds.size} servers`)
    .setColor(3066993)
    .setFooter(`LXBot v${main.version}`)
    client.guilds.forEach(guild => {
        guildEmbed.addField(guild.name, `Guild ID: **${guild.id}**`)
    })
    message.channel.send(guildEmbed)
}
module.exports.command = {
        name: "server",
        help: "List What server LXBot hads joined",
        usage: ">servers",
        group: "Information"
}
