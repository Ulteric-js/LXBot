const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const sexWords3 = ["Dnd", "dnd", "DND", "online", "Online", "ONLINE", "IDLE", "idle", "Idle"];
  if(!sexWords3.some(word => message.content.includes(word)) ) {
    let invaildstatus = new Discord.RichEmbed()
    .setColor("#efb120")
    .addField("LXStatus",`Invaild status!The vaild status are "dnd", "idle", "online"!` )
    return message.channel.send(invaildstatus)
}
    let status = args.join(" ");
    client.user.setStatus(`${status}`)
    const done = new Discord.RichEmbed()
    .setColor("#efb120")
    .addField("LXStatus",`Set playing status successfully!` )
    message.channel.send({embed:done});
  }
module.exports.command = {
        name: "setstatus",
        help: "Set the bot status",
        usage: ">setstatus <status>",
        group: "Fun"
}
