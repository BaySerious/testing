const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)

  const codeworld = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fluffy-logo&text=${yazi}`

  .replace(' ', '+')



  const codeworldembed = new Discord.RichEmbed()

  .setTitle(`İşte Logon Dostum`)

  .setColor("RANDOM")

  .setImage(codeworld)
  .setFooter("Astrea Bot | Fluffy Logo")

  message.channel.send(codeworldembed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'fluffy',
    description: '.',
    usage: 'fluffy <yazı>'
}