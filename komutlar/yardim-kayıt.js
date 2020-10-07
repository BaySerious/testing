const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Bot Kayıt Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot | Kayıt Sistemi",`
**:white_small_square: = \`=kayıt-rol\` : Kayıt edilecek rolünü ayarlarsınız.**
**:white_small_square: = \`=kayıt-log\` : Kayıt denetim kanalını belirtlersiniz.**
**:white_small_square: = \`=kayıt-kanal\` : Kayıt için kanal seçersiniz =kayıt İsim Yaş**`)
.addField('Astrea',`[Linke Tıkla Davet Et!](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
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
  name: 'yardımkayıt'
}; 