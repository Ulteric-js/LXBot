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
console.log("a")
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      const err = new Discord.RichEmbed()
      .setTitle("LXBan")
      .setColor("0064FF")
      .setDescription("You do not have permission to ban.");
      message.channel.send({embed:err});
      return;
   }
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      const err2 = new Discord.RichEmbed()
      .setColor("0064FF")
      .setTitle(":warning: LXBan")
      .setDescription("I do not have permission to ban.");
      message.channel.send({embed:err2});
      return;
   }
   let user2 = message.guild.member(message.mentions.users.first());
   const sexWords3 = ["/S", "/s"];
   if( sexWords3.some(word => message.content.includes(word)) ) {
   message.guild.ban(user2)
   message.delete()
   const noti = new Discord.RichEmbed()
   .setColor("0064FF")
   .setTitle("LXBan Notice")
   .setDescription(`The following message is to proof that you used /s flag to ban a member.\nSending the following message is to prevent raiding.`);
   message.author.send({embed:noti});
   const d1ne = new Discord.RichEmbed()
   .setColor("0064FF")
   .addField("LXBan", `You've banned ${user2}`);
   message.author.send({embed:d1ne});
   return;
} else
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setColor("0064FF")
        .setDescription("You do not have permission to ban.");
        message.channel.send({embed:err});
        return;
     }
    if(message.mentions.users.size < 1) {
        const mention = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: Please mention a user to ban!")
        .setColor("0064FF");
        message.channel.send({embed:mention})
        return;
    }
    let user = message.guild.member(message.mentions.users.first());
    if(user.id === message.author.id) {
        const yourself = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: You can't ban yourself, silly!")
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
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setColor("0064FF")
        .setDescription("I do not have permission to ban.");
        message.channel.send({embed:err});
        return;
     }
     user.ban(reason)
     const done = new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setColor("0064FF")
     .setDescription(`User:${user} banned for reason: ${reason}`);
     message.channel.send({embed:done});
}

module.exports.command = {
        name: "ban",
        help: "Ban allows you to ban a user. (mod only)",
        usage: ">ban <@mention> (ban reason)",
        group: "Moderation"
}
