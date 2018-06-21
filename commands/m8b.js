const Discord = require('discord.js')
function vf(e) {
if(e === 1) return "Yes";
if(e === 2) return "No";
if(e === 3) return "Maybe?";
if(e === 4) return "Not quite sure...";
}
module.exports.run = async (client, message, args) => {
  let say = args.join(" ")
  if(!say)
return message.reply('Please enter an message!')
let rgn = vf(Math.floor(Math.random() * 4) + 1);
const sinfo = new Discord.RichEmbed()
.setColor("0064FF")
.addField("Magic 8-Ball", `Answer: ${rgn}`)
message.channel.send({embed:sinfo});
  }
module.exports.command = {
        name: "m8b",
        help: "Display the server info",
        usage: ">m8b <message>",
        group: "Fun"
}
