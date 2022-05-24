const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`◈ | Hearted | Çekiliş `)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/838113515629707304/978700738496700416/ezgif.com-gif-maker_3.gif"
    )
    .addField(
      `__Başlat__`,
      `🎉  \`${prefix}başlat\` Sunucudan Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `__Yenile__`,
      `🎉  \`${prefix}reroll\` Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `__Sonlandır__`,
      `🎊 \`${prefix}sonlandır\` Çekilişi Bitir.`,
      true
    )
   
    .addField(
      `__Bilgilendirme__`,
      ` <a:yldz1:973867589493202984> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "çekiliş",
  description: "Çekiliş",
  usage: "çekiliş"
};