const Discord = require('discord.js')
const sql = require('sqlite')
module.exports.run = async (client, message, args) => {
        sql.run(`DELETE FROM scores WHERE rowid="${message.author.id}"`).then(row => {
                const info = new Discord.RichEmbed()
.setColor("0064FF")
.addField(`Points`, `All points deleted!`)
message.channel.send({embed:info})
        });
}
        module.exports.command = {
        name: "wipepoints",
        help: "Wipe all the points",
        usage: ">wipepoints",
        group: "Others"
}
