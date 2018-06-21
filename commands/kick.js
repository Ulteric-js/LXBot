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
      const err5 = new Discord.RichEmbed()
      .setTitle(":x: LXKick")
      .setColor("0064FF")
      .setDescription("You do not have permission to kick.");
      message.channel.send({embed:err5});
      return;
   }
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      const err2 = new Discord.RichEmbed()
      .setColor("0064FF")
      .setTitle(":x: LXKick")
      .setDescription("I do not have permission to kick.");
      message.channel.send({embed:err2});
      return;
   }
   let user2 = message.guild.member(message.mentions.users.first());
   const sexWords3 = ["/S", "/s"];
   if( sexWords3.some(word => message.content.includes(word)) ) {
   user2.kick()
   message.delete()
   const noti = new Discord.RichEmbed()
   .setColor("0064FF")
   .setTitle("LXKick Notice")
   .setDescription(`The following message is to proof that you used /s flag to kick a member.\nSending the following message is to prevent raiding.`);
   message.author.send({embed:noti});
   const d1ne = new Discord.RichEmbed()
   .setColor("0064FF")
   .addField("LXKick", `You've kick ${user2}`);
   message.author.send({embed:d1ne});
   return;
} else
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setTitle("LXKick")
        .setColor("0064FF")
        .setDescription("You do not have permission to kick.");
        message.channel.send({embed:err});
        return;
     }
    if(message.mentions.users.size < 1) {
        const mention = new Discord.RichEmbed()
        .setTitle("LXKick")
        .setTitle(":warning: Please mention a user to kick!")
        .setColor("0064FF");
        message.channel.send({embed:mention})
        return;
    }
    let user = message.guild.member(message.mentions.users.first());
    if(user.id === message.author.id) {
        const yourself = new Discord.RichEmbed()
        .setTitle("LXKick")
        .setTitle(":warning: You can't kick yourself, silly!")
        .setColor("0064FF");
        message.channel.send({embed:yourself})
        return;
    }
    let reason = args.slice(1).join(" ");
    if(!reason) {
        const noreason = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: Please give a reason to kick this user.")
        .setColor("0064FF");
        message.channel.send({embed:noreason})
        return;
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setColor("0064FF")
        .setDescription("I do not have permission to kick.");
        message.channel.send({embed:err});
        return;
     }
     user.kick(reason)
     const done = new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setColor("0064FF")
     .setDescription("User: `"+user.user.username+"#"+user.user.discriminator+"` kicked for reason: `"+reason+"`");
     message.channel.send({embed:done});
}

module.exports.command = {
        name: "kick",
        help: "Kick allows you to kick a user. (mod only)",
        usage: ">kick <@mention> (kick reason)",
        group: "Moderation"
}
