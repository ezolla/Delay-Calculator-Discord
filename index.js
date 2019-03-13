// Importing Required Modules
const config = require('./config.json');
const Discord = require('discord.js');

// Initializing Discord Client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Delay Calculator Started!'); 
  client.user.setActivity('Calculating Delays 🤔💭');
});

client.on('message', msg => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'delay') {
    // Didn't give all arguments, sending help.
    if (!args[0] || !args[1]) {
      msg.channel.send({embed: {
        color: 0x4dcc82,
        author: { name: 'Delay Calculator', icon_url: client.user.avatarURL },
        description: "Looks like you need some help, so here you go!",
        fields: [
          { name: "Example", value: `${config.prefix}delay [tasks #] [proxies #]` },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `Delay Calculator | ${msg.guild.name}`
        }
      }});
    } else { // Gave tasks and proxies!
      msg.channel.send({embed: {
        color: 0x4dcc82,
        author: { name: 'Delay Calculator', icon_url: client.user.avatarURL },
        description: "Here are the results of the delay calculations!",
        fields: [
          { name: "Tasks", value: args[0], inline: true },
          { name: "Proxies", value: args[1], inline: true },
          { name: "Recommended Delay", value: `${(3500 / (args[1]/args[0])).toFixed(0)}ms` } 
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `Delay Calculator | ${msg.guild.name}`
        }
      }});
    }
  } else if (command === 'help') {
    msg.channel.send({embed: {
      color: 0x4dcc82,
      author: { name: 'Delay Calculator', icon_url: client.user.avatarURL },
      description: "Looks like you need some help, so here you go!",
      fields: [
        { name: "Example", value: `${config.prefix}delay [tasks #] [proxies #]` },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `Delay Calculator | ${msg.guild.name}`
      }
    }});
  } 
});

// Logging into Discord Client
client.login(config.token);