const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if (!message.mentions.members.first()) {
    const uic = message.author.avatarURL
   const command_userinfo = new Discord.RichEmbed()
               .setAuthor("LXUserInfo", client.user.avatarURL)
               .setColor("#f92d00")
               .addField(":pencil2: Your username:", `${message.author.username}`, true)
               .addField(":robot: Is it a bot:", `${message.author.bot}`, true)
               .addField(":id: User ID:", `${message.author.id}`, true)
               .addField(":clock4: Your ccount created on:", `${message.author.createdAt}`, true)
               .addField(":hash: Your discriminator(tag)", `${message.author.discriminator}`, true)
               .addField("Do you have Nitro:", `${message.author.premiumSince}`, true)
               .setThumbnail(uic)
           message.channel.send(command_userinfo)
} else if (message.mentions.members.first()){
   const member = message.mentions.members.first()
   const uic1 = member.user.avatarURL
        const command_userinfo = new Discord.RichEmbed()
               .setAuthor("LXUserInfo", client.user.avatarURL)
               .setColor("#f92d00")
               .addField(":pencil2: Usernae:", `${member.user.username}`, true)
               .addField(":robot: Is it a bot:", `${member.user.bot}`, true)
               .addField(":clock4: Acount created on:", `${member.user.createdAt}`, true)
               .addField(":id: User ID:", `${member.user.id}`, true)
               .addField(":hash: User discriminator(tag):", `${member.user.discriminator}`, true)
               .addField("Do user have Nitro:", `${member.user.premiumSince}`)
               .setThumbnail(uic1)
           message.channel.send(command_userinfo)
}
}

module.exports.command = {
        name: "userinfo",
        help: "User information",
        usage: ">userinfo <@member>",
        group: "Information"
}
