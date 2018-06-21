const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const defaultSettings = {
    prefix: ">",
    pollChannel: "polls",
    mod: "yes",
    welcomeChannel: "general",
    welcomeMsg: "Welcome to this server!"
  }
  if(message.author.id !== "204071499135582208") {
    const err2 = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle(":x: Change Guild Configuration")
    .setDescription("You don't have permission to change guild configuration!")
    .setFooter("At least Message Author ID = 204071499135582208 is required!")
    message.channel.send({embed:err2});
  return;
}else {
  const guildConf = client.settings.get(message.guild.id) || defaultSettings;
  const key = args[0];
  if (!guildConf.hasOwnProperty(key))
   message.reply("This key is not in the configuration.");
  else {
    guildConf[key] = args.slice(1).join(" ");
    client.settings.set(message.guild.id, guildConf);
        const err1 = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("Change Guild Configuration")
    .setDescription(`Guild configuration item \`${key}\` has been changed to:\`${guildConf[key]}\``)
    message.channel.send({embed:err1});
  }
}
}
module.exports.command = {
  name: "ocngconf",
  help: "Change server config, owner only!",
  usage: ">ocngconf <option>"
}