  const Discord = require('discord.js')
  const cowsay = require('cowsay')
module.exports.run = async (client, message, args) => {
  let say = args.join(" ")
let cow = cowsay.say({
	text : `${say}`
});
let a = new Discord.RichEmbed()
.setTitle(`The cow says...`)
.setDescription(`\`\`\`${cow}\`\`\``)
.setColor('00FF00')
message.channel.send(a)
  }
module.exports.command = {
        name: "cowsay",
        help: "What did the cow say?",
        usage: ">cowsay <message>",
        group: "Fun"
}
