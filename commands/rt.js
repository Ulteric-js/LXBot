const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  let a = message.author
   let reason = args.slice(0).join(" ");
   if(!reason) {
       const noreason = new Discord.RichEmbed()
       .setAuthor("Tweet")
       .setTitle("Please enter an message before Tweeting.")
       .setColor("0064FF");
       message.channel.send({embed:noreason})
       return;
   }
   const done = new Discord.RichEmbed()
   .setAuthor(message.member.displayName+` @${message.author.username} . 1s`,message.author.avatarURL)
   .setDescription(`${reason}`)
   .setColor("0064FF");
   let m = await message.channel.send({embed:done})
   await m.react("🔄")
   await m.react("💬")
   await m.react("❤")

}

module.exports.command = {
        name: "rt",
        help: "Simulate a twitter retweet",
        usage: ">rt <Message>",
        group: "Fun"
}
