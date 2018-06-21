module.exports.run = async (client, message, args) => {
  const key = `${message.guild.id}-${message.author.id}`;
  message.channel.send(`You currently have ${client.points.getProp(key, "points")}, and are level ${client.points.getProp(key, "level")}!`);
  }
module.exports.command = {
        name: "points",
        help: "Show how much points you have.",
        usage: ">points",
}
