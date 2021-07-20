const client = require("../index");
const config = require('../config.json')
const prefix = config.prefix

client.on('ready', () => {
  console.log(`BOT ONLINE`);
  const activities = [`Type xchelp to see all the commands`, `Currently in ${client.guilds.cache.size} servers`,`Being used by ${client.users.cache.size} users` ];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "PLAYING"});
  }, 5000)
  })
