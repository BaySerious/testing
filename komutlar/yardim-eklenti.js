const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Eklenti Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot'un gelişmiş sistemleri!",`
**:rocket: : \`=invite\` : Davet sistemi komutlarını gösterir.**
**:pushpin: : \`=yardımkayıt\` : Kayıt sistemi komutlarını gösterir.**
**:tada: : \`=sunucu-kur\` : Basit bir sunucu kurar. (YENİ!)**
**:satellite: : \`=panel-kur\` : Sunucuda kişi paneli oluşturur.**`)
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
  name: 'eklenti'
}; 