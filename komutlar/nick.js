const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
const emoji = client.emojis.find("name", "mortik"); // sunucunuzdaki onaylama anlamında bir emojiyi yazınız.
exports.run = async (client, message, args) => {
  let verifyroless = message.guild.roles.find(`name`, "MANAGE_NICKNAMES");
  if (!message.member.roles.find("name", "MANAGE_NICKNAMES"))
  if (!message.member.roles.find("name", "MANAGE_NICKNAMES"))
    return message.channel.send(
      `Bu komudu kullacak kadar yetkili değilsin üzgünüm.`
    );

  let isim = args.slice(1).join(" ");
  let kullanici = message.mentions.users.first();

  if (!kullanici)
    return message.channel.send(`Lütfen geçerli bir nick giriniz.`);
  if (!isim) return message.reply(`:warning: Lütfen bir nick giriniz.`);
  if (isim.length > 100)
    return message.reply(
      `:warning: Lütfen \`100\` karakteri geçmeyecek şekilde bir isim giriniz!`
    );
  message.guild.members.get(kullanici.id).setNickname(`Tagınız ${isim}`);

  const ısıms = new Discord.RichEmbed()
    .setColor(`black`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${kullanici} Adlı Kişinin İsmi Değiştirildi. Emoji `);
  message.channel.send(ısıms);

  let emojilan = message.guild.emojis.find(emoji => emoji.name === "mortik");
  message.react(emojilan);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagisim"]
};

exports.help = {
  name: "nick",
  description: "Belirttiğiniz kullanıcının kullanıcı adını değiştirir.",
  usage: "nick [USER=88116]@kullanıcı[/USER] <kullanıcı adı>"
};