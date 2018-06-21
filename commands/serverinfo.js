const Discord = require('discord.js')
function regionf(r) {
// Converts lowercase region names to capital
// Code by me (github.com/nekofurball)
if(r === "sydney") return "Sydney";
if(r === "us-central") return "US-Central";
if(r === "us-east") return "US-East";
if(r === "us-south") return "US-South";
if(r === "us-west") return "US-West";
if(r === "eu-west") return "EU-West";
if(r === "eu-central") return "EU-Central"
if(r === "japan") return "Japan";
if(r === "russia") return "Russia";
if(r === "hongkong") return "Hong Kong";
if(r === "brazil") return "Brazil";
if(r === "singapore") return "Singapore";
}
function vf(e) {
if(e === 0) return "Unrestricted";
if(e === 1) return "Must have a verified email on their account";
if(e === 2) return "Registered on Discord longer then 5 minutes";
if(e === 3) return "Registered on Discord longer then 10 minutes";
if(e === 4) return "Must have a verified phone on their account";
}
module.exports.run = async (client, message, args) => {
let rgn = regionf(message.guild.region);
const sic = message.guild.iconURL
const sinfo = new Discord.RichEmbed()
.setColor("0064FF")
.setTitle("LXServerInfo")
.addField(":pencil2: Server Name", message.guild.name, true)
.addField(":clock4: This server created on", message.guild.createdAt, true)
.addField("Total Channel(Included Category and voice channels):", message.guild.channels.size, true)
.addField(":door: You joined this server at", message.member.joinedAt, true)
.addField(":information_desk_person: Total Server Members", message.guild.memberCount, true)
.addField(":bust_in_silhouette: Server owner", message.guild.owner, true)
.addField(":id: Guild ID", message.guild.id, true)
.addField(":flag_us: Server region", regionf(message.guild.region), true)
.addField("Roles", message.guild.roles.size, true)
.addField("Verification Level", vf(message.guild.verificationLevel), true)
.setThumbnail(sic)
message.channel.send({embed:sinfo});
  }
module.exports.command = {
        name: "serverinfo",
        help: "Display the server info",
        usage: ">serverinfo",
        group: "Information"
}
