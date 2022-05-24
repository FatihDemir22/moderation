const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  let miran = args[0];

  let kanal = message.mentions.channels.first();

  let x;
  if (miran === "ayarla") x = ".";
  if (miran === "sıfırla") x = ".";
  if (!x)
    return message.reply(
      "<a:red:976917496890294324> Lütfen **ayarla** veya **sfırla** yaz."
    );

  if (miran === "ayarla") {
    if (!kanal)
      message.channel.send(
        "<a:red:976917496890294324> Bir kanal belirtmelisin."
      );
    db.set(`ökanal_${message.guild.id}`, kanal.id);
    return message.channel.send(
      "<a:onay:973838056643776513> Öneri log kanalı başarıyla **" +
        kanal +
        "** olarak ayarlandı"
    );
  }
  if (miran === "sıfırla") db.delete(`ökanal_${message.guild.id}`);
  return message.channel.send(
    "<a:onay:973838056643776513> Önerilog kanalı sıfırlandı. "
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri-log"],
  permlevel: 4
};
exports.help = {
  name: "önerilog",
  despricton: "açıklama",
  usage: "önerilog"
};