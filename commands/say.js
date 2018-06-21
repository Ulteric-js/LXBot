const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
        message.delete();
    let embdm = args.join(" ")
     const enb = new Discord.RichEmbed()
     .setAuthor(message.author.username+" says..",message.author.avatarURL)
     .setColor("0064FF")
     .setDescription(embdm);
     message.channel.send({embed:enb});
}
    
module.exports.command = {
        name: "say",
        help: "Make the bot to say something",
        usage: ">say <message>",
        group: "Others"
}
