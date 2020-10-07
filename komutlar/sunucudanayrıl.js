const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "741396652711215237") return message.reply('<a:carpi:756903750551076964> Sahibim Sen Değilsin');
   message.channel.send('istediğiniz sunucudan başarıyla ayrıldım <a:yesilok:757902110288248843>');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};