const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
        const code = args.join(" ");
        const invaildwords = ["msg", "message", ".guild", "send", ".send", "token", "client", "destroy", "auth.token", "log", "console", "const", "let", "var"];
      if(invaildwords.some(word => code.includes(word)) ) {
      const op2 = new Discord.RichEmbed()
              .addField(":x: LXCalc", `Please enter an vaild math expression!`)
              .setColor("FF0000")
      return message.channel.send(op2);
      }
      const letters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'a+', 'a-', 'a*', 'a/', 'a^','b+', 'b-', 'b*', 'b/', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      if(letters.some(word => code.includes(word)) ) {
      const op3 = new Discord.RichEmbed()
             .addField("❌ Error", `Please enter an valid math expression!`)
             .setColor("FF0000")
      return message.channel.send(op3);
      }
        const requiredwords = ["+", "*", "-", "/", "^", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      if(!requiredwords.some(word => code.includes(word)) ) {
      const op1 = new Discord.RichEmbed()
              .addField(":x: LXCalc", `Please enter an vaild math expression!`)
              .setColor("FF0000")
      return message.channel.send(op1);
      }
        let evaled = eval(code);
        evaled = require("util").inspect(evaled);
        const op = new Discord.RichEmbed()
                .addField("LXCalc", `The number is: **${clean(evaled)}**`)
                .setColor("00FF00")
      message.channel.send(op);
      }
      const clean = text => {
         if (typeof (text) === "string")
             return text = text
                 .replace(/`/g, "`" + String.fromCharCode(8203))
                 .replace(client.token, "N230t0aKE6N4yrou9hv43fjeHGUD7hi49Hu3492h");  else
            return text;
      }      
module.exports.command = {
        name: "calc",
        help: "An Discord Calculator.",
        usage: ">calc <mathematical expression>",
        group: "Fun"
}
