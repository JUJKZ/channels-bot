const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
const config = require('./config.json')
const command = require('./command')
const { Permissions } = require('discord.js');


client.on('ready', () => {
  console.log('The client is ready!')


  command(client, 'voice', (message) => {
    const name = message.content.replace('!voice ', '')
    const Embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Tvůj voice channel byl vytvořen')
  .setDescription('Kanál bude smazán za 6 hodin')
  .setFooter('©JUJKZ 2021')
  .setTimestamp();
  

  message.guild.channels
  .create(name, {
    type: 'voice',
  })
  .then((channel) => {
    const categoryId = '889950156739457076'
    channel.setParent(categoryId)
    channel.setUserLimit(10)
    setTimeout(() => channel.delete(), 21600000)
    message.channel.send(Embed)
  })

  
})
})
client.on('ready', () => {
command(client, 'voicefor2', (message) => {
  const name1 = message.content.replace('!voicefor2 ', '')
  const Embed2 = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Tvůj voice channel pro dva byl vytvořen')
.setDescription('Kanál bude smazán za 6 hodin')
.setFooter('©JUJKZ 2021')
.setTimestamp();


message.guild.channels
.create(name1, {
  type: 'voice',
})
.then((channel) => {
  const categoryId = '889950156739457076'
  channel.setParent(categoryId)
  channel.setUserLimit(2)
  setTimeout(() => channel.delete(), 21600000)
  message.channel.send(Embed2)
})
})
})


client.login(config.token)