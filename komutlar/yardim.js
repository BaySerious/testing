const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Astrea Bot'un yardım menüsüne hoşgeldin!`)
.setColor('BLACK')
.addField("Astrea Bot | Yardım Komutları! <a:NOLUR:753975704252580010>",`
**<a:ONAYLANDI:756422581287911434> \`=genel\` : Genel komutları açar.**
**<a:ONAYLANDI:756422581287911434>  \`=ayarlar\` : Moderasyon komutlarını açar.**
**<a:ONAYLANDI:756422581287911434> \`=eğlence\` : Eğlence komutlarını açar.**
**<a:ONAYLANDI:756422581287911434> \`=yardımkayıt\` : Kayıt komutlarını açar.**
**<a:ONAYLANDI:756422581287911434>  \`=logo\` : Logo yapma komutlarını açar.**
**<a:ONAYLANDI:756422581287911434> \`=eklenti\` : Eklenti komutlarını açar.**`)
.addField('Astrea Bot, sizin için her gün geliştirilmeye devam ediliyor! <a:mortik:756897924402774076>',`[Botu Sunucuna Eklemek için Tıkla!](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
 .setImage('https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım","yardim"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 