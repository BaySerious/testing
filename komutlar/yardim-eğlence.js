const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Eğlence Menüsü`)
.setColor('BLACK')
.addField("Eğlenme Vakti!",`
**:game_die: : \`=zarat\` : Zar atarsınız.**
**:trophy: : \`=tkm\` : Taş kağıt makas oynarsınız.**
**:no_entry: : \`=wasted\` : Avatarınıza wasted efekti ekler.**
**:nauseated_face: : \`=pixel\` : Avatarınızı pixelleştirir.**
**:skull_crossbones: : \`=zıtrenk\` : Avatarınızı zıt renge çevirir.**
**:flying_disc: : \`=yazıtura\` : Yazı tura oyunu oynarsınız.**`)
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
  name: 'eğlence'
}; 