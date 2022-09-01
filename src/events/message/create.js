const { Collection } = require("discord.js");


module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    let msg = message.content.toLowerCase();
    if (
      message.author.bot ||
      message.system ||
      message.channel.type === "dm" ||
      !message.guild
    )
      return null;

       const prefixRegex = new RegExp(`^(<@!?${client.user.id}>)\\s*`);

    let str = "";
    if (message.guild.id !== process.env.DevGuild) {

    str += "This is not my server. Please contact my developer."
    }
    if (prefixRegex.test(message.content)) {
      str += `I do not support legacy commands due to Discord limitations.`
    }
    return message.reply(str)

};
