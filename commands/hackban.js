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
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      const err = new Discord.RichEmbed()
      .setTitle("LXKick")
      .setColor("0064FF")
      .setDescription("You do not have permission to hackban.");
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
     let user2 = args.slice(0).join(" ");
     const sexWords3 = ["/S", "/s"];
     if( sexWords3.some(word => message.content.includes(word)) ) {
     let user3 = ["/S", "/s"];
     user2 = user2.replace(" /s","");
     console.log(user2)
     message.guild.ban(user2)
     message.delete()
     const noti = new Discord.RichEmbed()
     .setColor("0064FF")
     .setTitle("LXHackBan Notice")
     .setDescription(`The following message is to proof that you used /s flag to hack ban a member.\nSending the following message is to prevent raiding.`);
     message.author.send({embed:noti});
     const d1ne = new Discord.RichEmbed()
     .setColor("0064FF")
     .addField("LXHackBan", `You've hack banned <@${user2}>`);
     message.author.send({embed:d1ne});
     return;
} else
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setTitle(":warning: LXBan")
        .setColor("0064FF")
        .setDescription("You do not have permission to ban.");
        message.channel.send({embed:err});
        return;
     }
    let user = args.join(" ");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        const err = new Discord.RichEmbed()
        .setColor("0064FF")
        .setTitle(":warning: LXBan")
        .setDescription("I do not have permission to ban.");
        message.channel.send({embed:err});
        return;
     }
     message.guild.ban(user)
     const done = new Discord.RichEmbed()
     .setTitle("An member has been banned!")
     .setColor("0064FF")
     .setDescription(`Affected User: <@${user}>\nOperator: ${message.author}`);
     message.channel.send({embed:done});
  }

module.exports.command = {
        name: "hackban",
        help: "Hackban can ban a user that is not existed on this server by id",
        usage: ">hackban <id>",
        group: "Moderation"
}
