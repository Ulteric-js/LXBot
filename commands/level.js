const Discord = require('discord.js')
const sql = require('sqlite')
module.exports.run = async (client, message, args) => {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
                if (!row) return message.reply("Sadly you do not have any points yet!");
                const info = new Discord.RichEmbed()
.setColor("0064FF")
.addField(`Points`, `You have **${row.points}** points!`)
.setFooter(`Point Counting: 1 Message = 2 points`)
message.channel.send({embed:info})
        });
}
        module.exports.command = {
        name: "points",
        help: "How much points you have",
        usage: ">points",
        group: "Fun"
}
