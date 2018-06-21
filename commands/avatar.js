const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if (!message.mentions.members.first()) {
  const avatar1 = new Discord.RichEmbed()
  .setColor("#efb120")
  .addField("Your avatar:",`Link:\n[Click Here](${message.author.avatarURL})`)
  .setFooter(`Command executed by ${message.author.username}`, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setTimestamp(new Date ())
  message.channel.send({embed:avatar1});
} else if (message.mentions.members.first()){
  const member = message.mentions.members.first()
  const uic1 = member.user.avatarURL
  const command_userinfo = new Discord.RichEmbed()
         .setColor("#f92d00")
         .addField(`${member.user.username}'s avatar:`, `Link:\n[Click Here](${member.user.avatarURL})`, true)
         .setThumbnail(uic1)
     message.channel.send(command_userinfo)
}
}
module.exports.command = {
        name: "avatar",
        help: "Show & get a link for your avatar",
        usage: ">avatar <@member>",
        group: "Fun"
}
