const Discord = require('discord.js')
const weather = require('weather-js')
module.exports.run = async (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    if (err) return message.channel.send(err);
  if (result.length === 0) {
    const embed1 = new Discord.RichEmbed()
    .setTitle(`:x: LXWeather`)
    .setDescription(`Invaild Location,please enter an vaild location.`)
    .setColor("0064FF")
    return message.channel.send(embed1)
  }
    const current = result[0].current
    const location = result[0].location;
    const embed = new Discord.RichEmbed()
    .setTitle(`Weather for ${current.observationpoint}`)
    .setDescription(`${current.skytext}`)
    .setThumbnail(current.imageUrl)
    .setColor("0064FF")
    .addField("Time Zone",`UTC ${location.timezone}:00`, true)
    .addField('Degree Type',location.degreetype, true)
    .addField('Temperature', `${current.temperature}°C`, true)
    .addField('Feels Like', `${current.feelslike}°C`, true)
    .addField('Wind',current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    .addField('Weather Source:', `[MSN Weather](https://www.msn.com/en-us/weather)`, true)
    message.channel.send(embed)
});
}
module.exports.command = {
        name: "weather",
        help: "See what is the weather on a country",
        usage: ">weather <Country name>",
        group: "Information"
}
