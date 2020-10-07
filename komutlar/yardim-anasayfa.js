const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Bot Sunucu Komutları Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot | Sunucu Sayfası",`
**:mega: : \`=duyuru\` : Bot duyuru yapar.**
**:postbox: : \`=oylama\` : Bot oylama başlatır.**
**:lock: : \`=kanal-gizle\` : Sohbeti gizlersiniz.**
**:unlock: : \`=kanal-gizle-kapat\` : Sohbet'in gizliliğini kaldırırsınız.**
**:tada: : \`=çekiliş\` : Bot çekiliş düzenler.**
**:busts_in_silhouette: : \`=hızlıçek\` : Çekiliş için hızlıca birini seçer.**
**:speaking_head: : \`=üye\` : Üyeler hakkında bilgi alırsınız.**
**:question: : \`=sunucubilgi\` : Sunucu hakkında bilgi alırsınız.**
**:pushpin: : \`=sunucudavet\` : Sunucunun davet linkini atar.**
**:airplane: : \`=canlı-destek\` : Canlı destek oluşturursunuz.**
**:police_officer: : \`=reklam-tara\` : Sunucuda reklam taraması çalıştırır.**`)
.addField('Astrea Bot',`[Linke Tıkla Davet Et!](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
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
  name: 'sunucu'
}; 