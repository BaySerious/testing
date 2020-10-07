const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Bot Yapma Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot | Logo Yapma Sistemi",`
**:white_small_square: = \`=arrow\` : Arrow logo yapar.**
**:white_small_square: = \`=code\` : Alev logo yapar.**
**:white_small_square: = \`=booking\` : Booking logo yapar.**
**:white_small_square: = \`=alev\` : Alev logo yapar.**
**:white_small_square: = \`=cool\` : Cool logo yapar.**
**:white_small_square: = \`=elmas\` : Elmas logo yapar.(YAKINDA!)**
**:white_small_square: = \`=dinamik\` : Dinamik logo yapar.**
**:white_small_square: = \`=altın\` : Altın logo yapar.**`)
.setImage("https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif")
.addField('Astrea Bot',`[Linke Tıkla Davet Et!](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["logo","yardım"], 
  permLevel: 0
};
exports.help = {
  name: "logo"
}; 