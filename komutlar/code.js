const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://media.discordapp.net/attachments/704285285797855275/725105350931644556/indir_1_1.jpg`, (err, image) => {
    image.resize(500, 200)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(86, 85)
        image.composite(avatar, 160, 55).write(`./resimler/coder/coder-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/coder/coder-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'coder',
  description: 'taslak', 
  usage: 'code <yazı>'
};