const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`◈ | Hearted | Ayarlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/838113515629707304/978700738496700416/ezgif.com-gif-maker_3.gif"
    )
    .addField(
      `__ModLog__`,
      `⚙️ \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `⚙️ \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `⚙️ \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `⚙️ \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `⚙️ \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `⚙️ \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
    .addField(
      `__Sohbet AÇ__`,
      `⚙️ \`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `⚙️ \`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `⚙️ \`${prefix}isimdeğiştir\` Discord Sunucunuzda Etiketlediginiz Kişinin İsmini Değiştir.`,
      true
    )
    .addField(
      `__Sil__`,
      `⚙️ \`${prefix}sil\` Yazdıgınız Sayı Kadar Discord Botta O Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Mute__`,
      `⚙️ \`${prefix}mute\` Discord Sunucunuzda Birisini Susturursunz.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `⚙️ \`${prefix}güvenlik\` Güvenlik Kanalını Ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `⚙️ \`${prefix}güvenlik-sıfırla\` Güvenlik Kanalını Sıfırlarsın.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      ` ⏳ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "Ayarlar Menüsü",
  usage: "ayarlar"
};