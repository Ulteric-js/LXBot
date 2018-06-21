const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  var command_ping1 = new Discord.RichEmbed()
  .setColor("#efb120")
  .setTitle("LXPing")
  .addField("Awaiting response from the Discord API...", "⠀")
  const m = await message.channel.send(command_ping1);
  var command_ping2 = new Discord.RichEmbed()
  .setColor("#efb120")
  .addField("Client latency is:", `${m.createdTimestamp - message.createdTimestamp}ms.`)
  .addField("API latency is:", `${Math.round(client.ping)}ms.`)
  m.edit(command_ping2);
}

module.exports.command = {
        name: "ping",
        help: "Ping and see the bot and API Latency",
        usage: ">ping",
        group: "Others"
}
