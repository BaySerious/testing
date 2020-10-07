const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '='
let yardım = new Discord.RichEmbed()  
.setAuthor(`Astrea Atatürk Menüsü`)
.setColor('BLACK')
.addField("Astrea Bot | Mustafa Kemal Atatürk ",`
**:Ataturk: : \Doğum Tarihi\` : Mustafa Kemal Atatürk'ün Doğum Tarihi 1881'dir.'**
**:Ataturk: : \`Ölüm Tarihi\` : Mustafa Kemal Atatürk'ün Ölüm Tarihi 1938'dir.**
**:Ataturk : \`Başarıları\` : Çanakkale Savaşlarının Kazanılması,Kurtuluş Savaşının Kazanılması,Cumhuriyetin Kurulması,Halifeliğin Kaldırılması,Tekke ve Zaviyelerin kapatılması,Öğretimin Birleştirilmesi Vb.**
**:Ataturk: : \`Gazilik\` : Atatürk Gazilik Unvanı'nı Sakarya Meydan Muhaberesi'nde almıştır.**
**:Ataturk: : \`Eserler\` : Atatürk ile ilgili 379 Eser yapılmıştır.**
**:Ataturk: : \`Annesi\` : Atatürk'ün Annesinin İsmi Zübeyde Hanım'dır.**
**:Ataturk: : \`Babası\` : Atatürk'ün Babasının İsmi Ali Rıza Efendi'dir..**
**:Ataturk: : \`Şahsi ilişkisi\` : Atatürk Latife Hanım İle 29 Ocak 1923 Yılında Evlenmiştir..**
**:Ataturk: : \`Boy\` : Atatürk'ün Boyu 1.70'dir.(Tahmini)**
**:Ataturk: : \`Kilo\` : Atatürk'ün Kilosu 75'dir.(Tahmini)**
**:Ataturk: : \`Ayakkabı Numarası\` : Atatürk'ün Giydiği ayakkabı numarası 42'dir..**
**:Ataturk: : \`Yazdığı Kitap Sayısı\` : Atatürk Toplam 14 Kitap Yazmıştır.**
**:Ataturk: : \`Yüz Yılın Lideri\` : UNESCO’Dan Yüz Yılın Lideri Unvanı'nı Almıştır.**
**:Ataturk: : \`Bildiği Diller\` : Atatürk 4 Yabancı Dil Biliyordu.Bunlar;Fransızca,Almanca,Farsça,Arapça.**`)
.addField('Astrea',`[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["atatürk","atam"], 
  permLevel: 0
};
exports.help = {
  name: 'Atatürk'
}; 