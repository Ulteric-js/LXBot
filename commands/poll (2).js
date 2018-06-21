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
   const defaultSettings = {
    prefix: ">",
    pollChannel: "polls",
    welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
  }
  const guildConf = client.settings.get(message.guild.id) || defaultSettings;
  let pollmsg = args.join(" ");
  let pollch = message.guild.channels.find("name", guildConf.pollChannel);
  if(!pollch) {
  const dc = new Discord.RichEmbed()
  .setColor("0064FF")
  .addField(`New poll by ${message.author.username}!`, `Poll: **${pollmsg}**`)
  .setFooter(`LXBot cannot find an channel named #${guildConf.pollChannel},so the poll will be send in here instead!`)
  let sendPa = await message.channel.send({embed:dc})
  await sendPa.react("🇾")
  await sendPa.react("🇳")
  return;
}
const done = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXPoll")
.setDescription(`:white_check_mark: Your poll is now on #${guildConf.pollChannel}!`)
message.channel.send({embed:done});
const channel = message.guild.channels.find("name", guildConf.pollChannel);
const poll = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle(`New poll by ${message.author.username}!`)
.setDescription(`Poll:${pollmsg}`)
let sendP = await channel.send({embed:poll})
await sendP.react("🇾")
await sendP.react("🇳")
  }
module.exports.command = {
        name: "poll",
        help: "Open up a poll",
        usage: ">poll <message>",
}
