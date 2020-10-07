const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online"); //eğer botu çevirimiçi göstermek istiyorsanız idle yazan kısmı online olarak değiştirin
  var oyun = [
    "Korkut Özelliği Eklendi!", //oynuyor kısmını "" arasına yazı yazarak değiştirebilirsiniz
    "Atatürk Özelliği Eklendi(BAKIMDA)", //oynuyor kısmını "" arasına yazı yazarak değiştirebilirsiniz
    "Sunucu Kur Özelliği Eklendi!", //oynuyor kısmını "" arasına yazı yazarak değiştirebilirsiniz
    "Kayıt işlemleri,moderasyon,Herşey Bu Botta!" //oynuyor kısmını "" arasına yazı yazarak değiştirebilirsiniz
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0); 

    client.user.setActivity(oyun[random], "");
  }, 3 * 2000);
};