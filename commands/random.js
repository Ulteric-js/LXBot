const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  var fun_roll2 = Math.floor(Math.random() * 100) + 1;
  var done = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXRandom")
.addField("The number is:",`${fun_roll2}`)
.setFooter("Choose from 1 to 100!")
message.channel.send({embed:done})
}

module.exports.command = {
    name: "random",
    help: "Generate Random Number From 1 to 100",
    usage: ">random",
}
