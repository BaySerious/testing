const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  VIEW_CHANNEL: null,
 
})

  message.channel.send('Sohbet kanalı ``Görülebilir`` durumuna getirildi.\nSohbet kanalını görünmez yapmak için ``-kanal-gizle`` yazmanız gerekmektedir.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sohbet-gizle','s-gizle','kanal-gizle-kapat'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'gizle-kapat',
  description: 'Sohbetinizi görülebilir yapar. Kapamak için !!s-aç.',
  usage: 'kapat'
};