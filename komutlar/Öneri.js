const Discord = require("discord.js"); ///modulumuzu tanittik
const db = require("quick.db");
exports.run = (client, message, args) => {
  let kanal = client.channels.cache.get(db.fetch(`ökanal_${message.guild.id}`));
  let p = db.fetch(`prefix_${message.guild.id}`) || process.env.prefix;

  let öneri = args.slice(0).join(" ");
  if (!kanal)
    return message.channel.send(
      "<a:red:976917496890294324>  Önerilog kanalı ayarlanmamış. Lütfen ayarlamak için `" +
        p +
        "önerilog #kanal` komutunu kullanın."
    );
  if (!öneri)
    return message.reply("<a:red:976917496890294324>  Önerini yaz lütfen. ");
  if (öneri.length > 300)
    return message.reply(
      "<a:red:976917496890294324>  Önerin `300` karakterden fazla olamaz."
    );
  if (öneri.length < 10)
    return message.reply(
      "<a:red:976917496890294324>  Önerin `10` karakterden az olamaz."
    );
  let user = message.mentions.users.first();
  if (user)
    return message.reply(
      "<a:red:976917496890294324>  Öneri komudunda kimseyi etiketleyemezsin"
    );

  message.channel.send(
    "<a:onay:973838056643776513> Önerin log kanalına iletildi. "
  );
  let codeming = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setFooter(message.author.username, client.user.avatarURL())
    .setTitle(" ⚡ | Yeni Öneri! ")
    .setDescription(
      `Öneren Kişi : ${message.author} ( ${message.author.id}) \n Önerisi : **${öneri}** `
    );
  kanal.send(codeming);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};
exports.help = {
  name: "öneri-yap",
  despricton: "Öneri verirsiniz.",
  usage: "öneri"
};