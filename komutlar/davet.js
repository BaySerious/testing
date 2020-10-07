const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const davet = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Astrea Bot'u sunucuna davet et!`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField('-------------------------------------------',`[Tıkla!](https://discord.com/api/oauth2/authorize?client_id=756521875315884184&permissions=0&scope=bot)`)
    .setFooter(
      `${message.author.username} tarafından istendi. | Botu sunucuna eklemezsen pıçaklarım.`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(davet);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};