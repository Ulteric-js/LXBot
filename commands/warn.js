const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
                                const defaultSettings = {
                            prefix: ">",
                            pollChannel: "polls",
                            mod: "yes"
                          }
const guildConf = client.settings.get(message.guild.id) || defaultSettings;
if(guildConf.mod === "no") {
          const erra = new Discord.RichEmbed()
      .setTitle("LXBot")
      .setColor("0064FF")
      .setDescription("This server does not support Moderation command!")
      .setFooter(`This can be changed by asking your guild administrator!`)
      message.channel.send({embed:erra});
      return;
   }
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
      const err = new Discord.RichEmbed()
      .setTitle("LXWarn")
      .setColor("0064FF")
      .setDescription("You do not have permission to warn.");
      message.channel.send({embed:err});
      return;
   }
   let member = message.guild.member(message.mentions.users.first());
   if(message.mentions.users.size < 1) {
       const mention = new Discord.RichEmbed()
       .setAuthor(client.user.username,client.user.avatarURL)
       .setTitle(":warning: Please mention a user to warn!")
       .setColor("0064FF");
       message.channel.send({embed:mention})
       return;
   }
   let user = message.guild.member(message.mentions.users.first());
   if(user.id === message.author.id) {
       const yourself = new Discord.RichEmbed()
       .setAuthor(client.user.username,client.user.avatarURL)
       .setTitle(":warning: You can't warn yourself!")
       .setColor("0064FF");
       message.channel.send({embed:yourself})
       return;
   }
   let reason = args.slice(1).join(" ");
   if(!reason) {
       const noreason = new Discord.RichEmbed()
       .setAuthor(client.user.username,client.user.avatarURL)
       .setTitle(":warning: Please give a reason to warn this user.")
       .setColor("0064FF");
       message.channel.send({embed:noreason})
       return;
   }
   let channel1 = message.guild.channels.find('name', 'mod-log');
   if(!channel1)
   await message.guild.createChannel("mod-log", "text")
   let reason2 = args.slice(1).join(" ");
   let member2 = message.mentions.members.first();
   let channel = message.guild.channels.find('name', 'mod-log');
   const warn = new Discord.RichEmbed()
   .setTitle("LXWarn")
   .setDescription(`${message.author} has warned ${member2} for ${reason2}`)
   .setColor("0064FF");
   channel.send(warn)
   const done = new Discord.RichEmbed()
   .setTitle(":hammer: LXWarn")
   .setDescription(`You've warned ${member2} for ${reason2}`)
   .setColor("0064FF");
   message.channel.send({embed:done})
  let member3 = message.mentions.members.first();
   const dm = new Discord.RichEmbed()
   .setTitle("LXWarn")
   .setDescription(`${message.author} has warned you for ${reason2}`)
   .setFooter("You think this warn is unfair? Sorry,I can't help you")
   .setColor("0064FF");
   member3.send({embed:dm})
}

module.exports.command = {
        name: "warn",
        help: "Warn a member",
        usage: ">warn <@member>"
}
