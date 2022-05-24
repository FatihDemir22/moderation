const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`◈ | Hearted | Seviye Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/838113515629707304/978700738496700416/ezgif.com-gif-maker_3.gif"
    )
    .addField(
      `**__Seviye__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviye\` \n Sizin Özelliştirdiginiz Seviye Sıralama Kartını Gösterir.`,
        true
    )
     .addField(
      `**__Seviye Sıralama__**`,
      `<a:yldz1:973867589493202984> \`${prefix}sıralama\` \n Seviye DataBase 'indeki Sıralama Ranklarını Görürsün.`,
        true
    )
    .addField(
      `**__SeviyeKart Özelleştir Resim__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviyekart-özelleştir resim\` \n Seviye Kartınıza Özel Arka Plan Ayarlarsınız.`,
        true
    )
   .addField(
      `**__SeviyeKart Özelleştir Renk__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviyekart-özelleştir renk\` \n Seviye Kartınıza Özel Renk Ayarlarsınız.`,
        true
    )
    .addField(
      `**__Seviye Aç__**`,
      `<<a:yldz1:973867589493202984> \`${prefix}seviye-ayarla durum aç\` \n Discord Sunucunuzda Seviye Sistemini Açarsınız.`,
        true
    )
     .addField(
      `**__Seviye Kapat__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviye-ayarla durum kapat\` \n Discord Sunucunuzda Seviye Sistemini Kapatırsınız.`,
        true
    )
     .addField(
      `**__Seviye Kanal__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviye-ayarla log kanal\` \n Discord Sunucunuzda Seviye Log Kanal Ayarlarsanız.`,
        true
    )
     .addField(
      `**__Seviye Mesaj__**`,
      `<a:yldz1:973867589493202984> \`${prefix}seviye-ayarla log mesaj seviye\` \n Seviye Log Kanalına Gidecek Mesaji Ayarlasınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      ` <a:yldz1:973867589493202984> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};