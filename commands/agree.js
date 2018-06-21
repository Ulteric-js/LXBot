const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let user = message.author
let role1 = message.guild.roles.find("name", "Member");
let role3 = message.guild.roles.find("name", "Members");
let role2 = message.guild.roles.find("name", "Gatekeeper");
let role4 = message.guild.roles.find("name", "gatekeeper");
let role5 = message.guild.roles.find("name", "member");
let role6 = message.guild.roles.find("name", "members");
message.member.addRole(role1)
message.member.addRole(role3)
message.member.addRole(role5)
message.member.addRole(role6)
message.member.removeRole(role2)
message.member.removeRole(role4)
message.delete()
  }
module.exports.command = {
        name: "agree",
        help: "Agree the server rules",
        usage: ">agree",
        group: "Others"
}
