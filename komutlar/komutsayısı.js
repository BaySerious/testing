const Discord = require('discord.js');
exports.run = function(client, message, args) {
      const codeworld = new Discord.RichEmbed()
      .setAuthor(`CodeWorld`)
      .setDescription(client.commands.size || 0)
      .setColor('BLUE')  
      message.channel.sendEmbed('Astrea Bot | Komut Sayısı')
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['k'],
  permLevel: 0 
};
exports.help = {
  name: 'komutsayısı'
};
