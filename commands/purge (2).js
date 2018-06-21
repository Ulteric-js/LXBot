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
  if(!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply("Sorry, you don't have permissions to use this!");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 1000)
      return message.reply("Purge:The number must be more then 0 and less then 1001");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let times = deleteCount;
for(let i=0; i < times; i++){
    await message.channel.bulkDelete(1)

}

    var purge = new Discord.RichEmbed()
    .setColor("#efb120")
    .addField("A staff has cleared the chat!",`Operator: ${message.author.username}`)
    .addField("Message(s) deleted:", `${deleteCount}`)
    .setFooter(`Purge Mode: Slow`)
    message.channel.send(purge)
}
module.exports.command = {
        name: "purge",
        help: "Slowly purge the chat,can purge 2 weeks older",
        usage: ">purge <Messages>"
}
