const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const er1 = new Discord.RichEmbed()
          .setColor("FF0000")
          .setTitle(":x:LXEval")
          .setDescription(`This command is designed for the owner of the bot only!`);
  if(message.author.id !== main.botOwner) return message.channel.send(er1);
  const args1 = message.content.split(" ").slice(1);
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      const op = new Discord.RichEmbed()
              .addField(":arrow_right: LXEval Input:", `\`\`\`${code}\`\`\``)
              .addField(":arrow_left: LXEval Output:", `\`\`\`${clean(evaled)}\`\`\``)
              .setColor("00FF00")
    message.channel.send(op);
  } catch (err) {
    const er = new Discord.RichEmbed()
            .setColor("FF0000")
            .setTitle(":x:LXEval")
            .setDescription(`An invaild code has been detected causing an error has occurred.\nError:\`\`\`xl
${err}\`\`\``);
    message.channel.send({embed:er});

  }
};
module.exports.command = {
        name: "eval",
        help: "Eval",
        usage: ">eval <text>",
        group: "Others"
};
const clean = text => {
   if (typeof (text) === "string")
       return text = text
           .replace(/`/g, "`" + String.fromCharCode(8203))
           .replace(client.token, "N230t0aKE6N4yrou9hv43fjeHGUD7hi49Hu3492h");  else
      return text;
}
