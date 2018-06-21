// LXBot main script
// Code base by nekofurball
// Continued by LXDE
// <3
                    const repl = require('repl');
                    const weather = require('weather-js')
                    const Discord = require('discord.js')
                    const Enmap = require('enmap')
                    const EnmapLevel = require('enmap-level') // Define all important variables (discord.js, client, configuration files.)
                    const sql = require("sqlite");
                    const Provider = require('enmap-sqlite');
                        fs = require('fs')
                        client = new Discord.Client
                        main = require('./config/main.json')
                        auth = require('./config/auth.json');
                        branch = require('./config/branch.json')
                        client.settings = new Enmap({provider: new Provider({name: "settings"})});
                        client.points = new Enmap({provider: new Provider({name: "points"})});
                        const defaultSettings = {
                            prefix: ">",
                            pollChannel: "polls",
                            mod: "yes",
                            welcomeChannel: "general",
                            welcomeMsg: "Welcome to this server!"
                          }
                        client.commands = new Discord.Collection();
                                    // Look for commands and add them to a collection.
                                    fs.readdir("./commands/", (err, files) => {
                                    if(err) console.log(err);

                                    let jsfiles = files.filter(f => f.split(".").pop() === "js");
                                    if(jsfiles.length <= 0) {
                                        console.log(`No commands files found.`);
                                        process.exit(0)
                                        return;
                                    }

                                    console.log(`${jsfiles.length} commands`);
                                    jsfiles.forEach((f, i) => {
                                    try {
                                        let c = require(`./commands/${f}`);
                                        console.log(`OK! ${i + 1}: ${f} loaded.`);
                                        client.commands.set(c.command.name, c);
                                    }
                                    catch(error) {
                                        console.log(`${f} not loaded because of error: ${error}.`);
                                    }
                                    });
                                    });
                                            client.login(auth.botToken) // log into bot using token defined in auth.json
                                client.on('ready', async =>{
                                    console.log("LXBot ready.")
                                    console.log("Logged in as: "+client.user.username+ "(ID:" + client.user.id + ")")
                                    client.user.setActivity(">help | "+client.guilds.size+" servers.")
                                    var replServer = repl.start({
                                    prompt: "eval> ",
                                    });
                                    replServer.context.client = client;
                                }) // Bot ready
                                client.on('guildCreate', async guild =>{
                                const lx = new Discord.RichEmbed()
                                        .setAuthor(client.user.username,client.user.avatarURL)
                                        .setColor("0064FF")
                                        .setTitle("Hi! I'm LXBot. Nice to meet you!")
                                        .setDescription("My prefix is `>`\nIn order for reports command to work, I have created a channel called `reports` in your server.\nEnjoy, using my vast range of commands!");
                                guild.owner.send({embed:lx});
                                client.settings.set(guild.id, defaultSettings);
                                let reports = guild.channels.find("name", "reports");
                                if(reports) {
                                    return;
                                } else {
                                    await message.guild.createChannel("reports", "text")
                                    return;
                                }
                                client.user.setActivity(">help | "+client.guilds.size+" servers.")
                                }) // Guild Join
                                client.on('guildDelete', async guild =>{
                                    client.user.setActivity(">help | "+client.guilds.size+" servers.")
                                }) // Guild Leave
                                client.on('guildMemberAdd', async member => {
                                      const guildConf4 = client.settings.get(member.guild.id) || defaultSettings;
                                      const channel = member.guild.channels.find("name", guildConf4.welcomeChannel);
                                              const yo = new Discord.RichEmbed()
                                              .setColor("00FFFF")
                                              .setTitle("LXBot")
                                              .setDescription(guildConf4.welcomeMsg + member);
                                      channel.send(yo);
                                })
                                client.on('message', async message =>{                     
                                    if(message.author.bot) return; // Prevent loops.
                                    const guildConf = client.settings.get(message.guild.id) || defaultSettings;
                                    const args = message.content.slice(guildConf.prefix.length).trim().split(/ +/g);
                                    const command = args.shift().toLowerCase();
                                    if(message.content.indexOf(guildConf.prefix) !== 0) return;
                                    let comm = client.commands.get(command);
                                    if(comm) comm.run(client, message, args).catch(err => {
                                      const err0r = new Discord.RichEmbed()
                                              .setColor("FF0000")
                                              .setTitle(":x:The following error has occurred in LXBot")
                                              .setDescription(`We're very sorry for your inconvinence while using this bot,we will try to fix it as soon as possible.\nError:\`\`\`${err}\`\`\``);
                                      message.channel.send({embed:err0r});
                                      const err1r = new Discord.RichEmbed()
                                              .setColor("FF0000")
                                              .setTitle("LXBot Bug")
                                              .setDescription("If you belive this is a bug,please use **>bugreport <message>**");
                                      message.channel.send({embed:err1r});
                                    console.log("Command: "+command+" encountered an error. "+err)
                                    });
                                    client.on('message', async message =>{
                                        if (message.guild) {
                                            const key = `${message.guild.id}-${message.author.id}`;
                                            if(!client.points.has(key)) {
                                              client.points.set(key, {
                                                user: message.author.id, guild: message.guild.id, points: 0, level: 1
                                              });
                                            }
                                            let currentPoints = client.points.getProp(key, "points");
                                            client.points.setProp(key, "points", 3 + currentPoints);
                                            const curLevel = Math.floor(0.1 * Math.sqrt(currentPoints));
                                            if (client.points.getProp(key, "level") < curLevel) {
                                              client.points.setProp (key, "level", curLevel);
                                            }
                                          }
                                        }); 
                                    });
