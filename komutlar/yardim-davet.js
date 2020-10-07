  const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Davet Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot'u Eklemek İsterseniz =davet",`
**:white_small_square: = \`=davet-kanal\` : Davet Kanalı Belirlersiniz**
**:white_small_square: = \`=davet-ekle\` : Seçilen Kullanıcıya Davet Ekler**
**:white_small_square: = \`=davet-sil\` : Seçilen Kullanıcıya Davet Siler**
**:white_small_square: = \`=davet-sıfırla\` : Tüm Davetleri Siler**
**:white_small_square: = \`=davet-kanal-sıfırla\` : Davet Kanalını Siler**
**:white_small_square: = \`=davetler\`  : Tüm Davetlerini Gösterir**`)
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
  name: 'invite'
}; 