const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, msg, args) => {


  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (msg.member.hasPermission("ADMINISTRATOR"))
    x = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("ADMINISTRATOR"))
    x = "<a:red:976917496890294324>";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:red:976917496890294324>";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:red:976917496890294324>";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:red:976917496890294324>";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:red:976917496890294324>";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:red:976917496890294324>";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:red:976917496890294324>";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:red:976917496890294324>";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:red:976917496890294324>";

  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:red:976917496890294324>";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:onay:973838056643776513>";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:red:976917496890294324>";

  msg.channel.send(
    new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setAuthor(`◈ | Hearted  | Yetkilerim Tablo`)
       .addField(
      `__Bilgilendirme__`,
      ` 🌐 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n`
    )
      .setThumbnail(
      "https://cdn.discordapp.com/attachments/838113515629707304/978700738496700416/ezgif.com-gif-maker_3.gif"
       )
      .setDescription(stripIndents`

${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
     
   `)
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinlerim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
