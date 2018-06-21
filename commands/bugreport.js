const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   let reason = args.slice(0).join(" ");
   if(!reason) {
       const noreason = new Discord.RichEmbed()
       .setAuthor(client.user.username,client.user.avatarURL)
       .setTitle(":warning: Please give a message of what you want to report.")
       .setColor("0064FF");
       message.channel.send({embed:noreason})
       return;
   }
 let a = client.users.get("204071499135582208")
   const done = new Discord.RichEmbed()
    .setTitle(":white_check_mark: LXBot Bug Report")
    .setDescription(`Your report has been successfully sent!`)
    .setColor("0064FF");
   message.channel.send({embed:done});
   const dm = new Discord.RichEmbed()
   .addField(`LXBugReport`, `${message.author.username} has reported a bug!`)
   .addField(`Bug:`, `${reason}`)
   .setColor("0064FF");
   a.send({embed:dm})
}

module.exports.command = {
        name: "bugreport",
        help: "Report a LXBot bug",
        usage: ">bugreport <message>",
        group: "Others"
}
