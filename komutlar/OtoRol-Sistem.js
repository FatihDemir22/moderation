const Discord = require("discord.js");
const prefix = process.env.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`ShadowRise Network | OtoRol Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png"
    )
    .setDescription(
      `<a:tik:822531200353959937> ShadowRise Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__OtoRol__**`,
      `<a:green:822530401301954632> \`${prefix}otorol\` \n OtoRolü Nasıl Ayarlayacagınız Hakkında Bilgi Tablosu.`,
        true
    )
  .addField(
      `**__OtoRol Msg__**`,
      `<a:green:822530401301954632> \`${prefix}otorol-msg\` \n Sunucunuza Özel Otorol Msg Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Ayarla__**`,
      `<a:green:822530401301954632> \`${prefix}oto-rol-ayarla\` \n OtoRol Mesaji Gidecegi Kanalı Ve Rölü Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Kapat__**`,
      `<a:green:822530401301954632> \`${prefix}otorol-kapat\` \n Tüm OtoRol Ayalarını Sıfırlarsınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | ShadowRise İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["", ""],
  permLevel: 0
};
exports.help = {
  name:"otorol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};