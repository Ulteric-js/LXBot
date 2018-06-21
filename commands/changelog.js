const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  var uic = message.author.avatarURL
  const done = new Discord.RichEmbed()
  .setColor("0064FF")
  .setAuthor("LXChangelog")
  .addField("LXBot Version 1.4", "1.Added weather command\n2.Added rt command\n3.Added Calc Command\n4.Gay command now have emoji\n5.It now show memory in the bot info")
  .setThumbnail(uic)
  message.channel.send({embed:done});
}

module.exports.command = {
        name: "changelog",
        help: "Change log of LXBot",
        usage: ">changelog",
        group: "Information"
}
