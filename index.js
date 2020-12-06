const config = require('./config.js');
const Discord = require('discord.js');
const robot = new Discord.Client();

robot.on('ready', () => {
    console.log(`I'm ready!`);
});

robot.on('guildMemberAdd', (member) => {
    if(member.guild.id != config.Server_Id) return;
    let welcome_channel = robot.channels.cache.get(config.Channel_Id);
    welcome_channel.send(`<@${member.id}>`).then(msg => msg.delete({ timeout: 500 }))
})


robot.login(config.Token);