const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Massdm starting on account: ${client.user.tag} (${client.user.id})`)
    client.user.settings.user.friends.map((f, i) => {
        client.users.get(f.id).send(`hahahahaahaha`).then(() => console.log(`[${i}] sent message to ${f.username}#${f.discriminator}`)).catch((e) => {
            console.log(`[${i}] could not send message to ${f.username}#${f.discriminator}`)
        })
    })
})
client.login('ur token')