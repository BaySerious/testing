const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://habbofont.net/font/bubble/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setTitle("Bubble Logo")
  .setColor("#6278c5")
  .setImage(linqo)
  .setFooter('Astrea Logo Generator')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'bubble',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'bubble <yazı>'
}