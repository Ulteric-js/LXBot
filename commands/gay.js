  const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
var fun_gaypercentage = Math.floor(Math.random() * 100) + 1;
if(message.author.id === "204071499135582208") {
var a1 = new Discord.RichEmbed()
.setColor("#FFA500")
.addField("Gay", "You are 0% gay. Cause you created me! :smile:")
return message.channel.send(a1)
}else if(message.author.id === "250595598011465728") {
var a1 = new Discord.RichEmbed()
.setColor("#FFA500")
.addField("Gay", "You are ∞% gay. Cause you are BluueRH! :gay_pride_flag: :gay_pride_flag: :gay_pride_flag:")
return message.channel.send(a1)
}else if(message.guild.member(message.mentions.users.first())) {
var xd = new Discord.RichEmbed()
.setColor("#FFA500")
.addField("Gay", "***You*** are " + fun_gaypercentage + "% gay.")
message.channel.send(xd)
}else if(fun_gaypercentage > 50) {
var fun_gayoutput1 = new Discord.RichEmbed()
.setColor("#FFA500")
.addField("Gay", "You are " + fun_gaypercentage + "% gay. :gay_pride_flag:")
message.channel.send(fun_gayoutput1)
}else if(fun_gaypercentage < 50) {
var fun_gayoutput2 = new Discord.RichEmbed()
.setColor("#00FF00")
.addField("Gay", "You are " + fun_gaypercentage + "% gay. :smile:")
message.channel.send(fun_gayoutput2)
}
  }
module.exports.command = {
        name: "gay",
        help: "How gay you are?",
        usage: ">gay",
}
