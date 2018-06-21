const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let user = message.guild.member(message.mentions.users.first());
if(!user)
var bf = new Discord.RichEmbed()
.setColor("#efb120")
.addField(`:x: LXBot ban`,`Please mention a vaild member on this server!`)
message.channel.send({embed:bf});
let reason = args.slice(1).join(" ");
const done = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setColor("0064FF")
.setDescription(`User:${user} banned for reason: ${reason}`);
message.channel.send({embed:done});
  }
module.exports.command = {
        name: "fban",
        help: "Fakeban People",
        usage: ">fakeban <@member>",
        group: "Fun"
}
