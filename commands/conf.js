const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const defaultSettings = {
    prefix: ">",
    pollChannel: "polls",
    mod: "yes",
    welcomeChannel: "general",
    welcomeMsg: "Welcome to this server!"
  }
  let configKeys = "";
  const guildConf = client.settings.get(message.guild.id) || defaultSettings;
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
        name: "conf",
        help: "Show server configuration",
        usage: ">conf",
        group: "Moderation"
}
