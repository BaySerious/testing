const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Uptime Bot Menüsü`)
.setColor('GREEN')
.addField("Uptime Bot'u Eklemek İsterseniz =davet",`**
**<a:mortik:756897924402774076> Uptime Botu eklemek istediğiniz dolayından teşekkür ederiz.Ekleme bağlantısı aşağıdadır.**
**<a:NTROELMAS:758755012385177641> UPTİME BOT NEDİR?**
**:boxing_glove: : *Uptime Bot* botlarınızı 7/24 aktif yapmak için kullanılan bir botdur.**
**:ballot_box_with_check: : *Uptime Bot* Kendisi aktif olmasa bile eklediğiniz botlar aktif olur.**
**:hammer_pick: : Peki Neden UPTİME BOTU KULLANMALIYIM?**
**:recycle: : Bildiğiniz üzere projeniz yani botunuz bir kaç saat ve ya dakika olarak aktif kalır.Bu yüzden uptime bot kullanmalısınız.**
**:satellite: : UPTİME BOT NASIL KULLANILIR?**
**:police_officer: Uptime yapmak istiyor iseniz @UptimeBot özeline gidip u!ekle <show link> şeklinde uptime yapabilirsiniz.**
**:detective: : Uptime Botumuza bağlı olan botları ise u!say şeklinde görebilirsiniz.**`)
.addField('Uptime Bot',`[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=754057055660277971&permissions=0&scope=bot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["uptimebot","uptime-bot"], 
  permLevel: 0
};
exports.help = {
  name: 'uptimebot'
}; 