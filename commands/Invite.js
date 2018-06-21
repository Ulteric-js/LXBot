const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
const sic = client.user.avatarURL
const invi = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXInvite")
.addField("Invite LXBot to your server!", `[Click Here](http://lxbot.tk/invsel.html)`)
.addField("Need Support?Join our support server!", `[Click Here](https://discord.gg/8jUmm4n)`)
.addField("LXBot Website!", `[Click Here](http://lxbot.tk/)`)
.setThumbnail(sic)
message.channel.send({embed:invi});
  }
module.exports.command = {
        name: "invite",
        help: "Display LXBot invite link,Support server and LXBot Website.",
        usage: ">invite"
}
