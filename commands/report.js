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
    if(message.mentions.users.size < 1) {
        const mention = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: Please mention a user to report!")
        .setColor("0064FF");
        message.channel.send({embed:mention})
        return;
    }
    let user = message.mentions.users.first()
    if(user.id === message.author.id) {
        const yourself = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: You can't report yourself, silly!")
        .setColor("0064FF");
        message.channel.send({embed:yourself})
        return;
    }
    let reason = args.slice(1).join(" ");
    if(!reason) {
        const noreason = new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
        .setTitle(":warning: Please give a reason to report this user.")
        .setColor("0064FF");
        message.channel.send({embed:noreason})
        return;
    }
    const repembed = new Discord.RichEmbed()
    .setAuthor(client.user.username,client.user.avatarURL)
    .setTitle(":warning: User Report")
    .setColor("0064FF")
    .addField("Reported User",user.username+"#"+user.discriminator,true)
    .addField("Reporter",message.author.username+"#"+message.author.discriminator,true)
    .addField("Reason of report",reason);
    let report = message.guild.channels.find("name","reports");
    if(report) {
        report.send({embed:repembed})
        return;
    } else {
    let re = await message.guild.createChannel("reports","text");
    re.send({embed:repembed})
    return;
    }
}

module.exports.command = {
        name: "report",
        help: "Report allows you to report a rulebreaker.",
        usage: ">report <@mention> (report reason)",
        group: "Moderation"
}
