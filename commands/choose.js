  const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  let ch1 = args[0];
  let ch2 = args[1];
  function vf(e) {
    if(e === 1) return `Hm,I choose **${ch1}**`;
    if(e === 2) return `Hm,I choose **${ch2}**`;
    }
let rgn = vf(Math.floor(Math.random() * 2) + 1);
const sinfo = new Discord.RichEmbed()
.setColor("0064FF")
.addField("Random choose", `${rgn}`)
message.channel.send({embed:sinfo});

  }
module.exports.command = {
        name: "choose",
        help: "Choose an random choice",
        usage: ">choose <item 1> <item 2>.",
        group: "Fun"
}
