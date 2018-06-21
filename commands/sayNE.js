  const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  let say2 = args.join(" ")
  message.channel.send(`${say2}`)
}
module.exports.command = {
        name: "sayne",
        help: "Say command with no embed",
        usage: ">sayne <message>",
        group: "Fun"
}
