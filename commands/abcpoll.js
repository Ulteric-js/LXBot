const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      const err = new Discord.RichEmbed()
      .setAuthor(client.user.username,client.user.avatarURL)
      .setColor("FF0000")
      .setDescription("You do not have permission to create a poll!.");
      message.channel.send({embed:err});
      return;
   }
  let msga = args[0];
  let msgb = args[1];
  let msgc = args[2];
  let pollch = message.guild.channels.find("name", "polls");
  if(!pollch)
  await message.guild.createChannel("polls", "text")
const done = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXCPoll")
.setDescription(":white_check_mark: Your choice poll is now on #polls!")
.setFooter(`Command executed by ${message.author.username}`, message.author.avatarURL)
message.channel.send({embed:done});
const channel = message.guild.channels.find("name", "polls");
const poll = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle(`New Choice poll by ${message.author.username}!`)
.setDescription(`A: **${msga}**\nB: **${msgb}**\nC: **${msgc}**`)
let sendP = await channel.send({embed:poll})
await sendP.react("🇦")
await sendP.react("🇧")
await sendP.react("🇨")
  }
module.exports.command = {
        name: "cpoll",
        help: "Open up a choice poll in #polls",
        usage: ">cpoll <message>",
}
