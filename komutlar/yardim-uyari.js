const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Destiny Uyarı Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot'u Eklemek İsterseniz =davet",`
**:white_small_square: = \`=uyar\` : Belirtilen Kişiyi Uyarır**
**:white_small_square: = \`=uyarı-sil\` : Kişinin Uyarılarını Siler**
**:white_small_square: = \`=uyarılar\` : Kişinin Uyarılarını Görürsünüz**`)
.addField('Astrea',`[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'yardımuyarı'
}; 