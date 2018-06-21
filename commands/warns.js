const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const guildConf = client.warns.get(message.guild.id, message.member.id) || defaultSettings;
  Object.keys(guildConf).forEach(key => {
    configKeys += `${key}  :  ${guildConf[key]}\n`;
  });
      const err2 = new Discord.RichEmbed()
    .setColor("0064FF")
    .setTitle("The following are the server's current configuration for LXBot:")
    .setDescription(` \`\`\`${configKeys}\`\`\``)
    message.channel.send({embed:err2});
  }
module.exports.command = {
        name: "warns",
        help: "Show server configuration",
        usage: ">warns",
        group: "Moderation"
}
