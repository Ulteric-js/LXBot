    const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let helpvar = client.commands.map(c => c.command.name + " - " + c.command.help) .join("\n\n")
    const helpembed = new Discord.RichEmbed()
    .setColor("0064FF")
    .setTitle("It seems you need help,so that's all the command!")
    .setDescription(`Command List:\`\`\`${helpvar}\`\`\``,true)
    .addField(`Need more help?`, `Feel Free to join our [support server!](https://discord.gg/FkXtek)`)
    message.author.send({embed:helpembed})
    message.react("📜")
}


module.exports.command = {
        name: "help",
        help: "Help shows all the available commands within LXBot",
        usage: ">help"
}
