///OP///OP///OP///OP///OP///OP
require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rustcaln1.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBcz9roIyFgugR6UTC5AUnJy9CikKF80O4"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyBcz9roIyFgugR6UTC5AUnJy9CikKF80O4"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود تغيير الحالة
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");

  client.user.setActivity(`${prefix}help`, { type: "WATCHING" });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You Don't Have ADMINISTRATOR privileges :rolling_eyes:**"
      );

    message.channel.send("`#` " + args.join("  "));
    message.delete();
  }
});

////كود تيكت
client.on("message", message => {
  if (message.content.startsWith(prefix + "new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists(gg => gg.name === "Support Team"))
      return message.channel.send(`You Have To Create a role named \`Support Team\`.`);
    if (
      message.guild.channels.filter(
        Channel =>
          Channel.name == `ticket-${message.author.id}` &&
          Channel.type == "text"
      ).size > 0
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.find(gg => gg.name === "Support Team");
        let role2 = message.guild.roles.find(gg => gg.name === "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, ${c}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  } else if (message.content.startsWith(prefix + "closet")) {
    if (!message.guild.roles.exists(gg => gg.name === "Support Team"))
      return message.channel.send(` You Have To Create A Role Named \`Support Team\`.`);
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send("This isn't a ticket channel!");
    if (
      !message.member.roles.has(
        message.guild.roles.filter(r => r.name === "Support Team").first().id
      )
    )
      return message.channel.send("You don't have the `Support Team` role!");
    message.channel
      .delete()
      .catch(e => message.channel.send("Check my permissions!"));
  }
});

client.on("message", async message => {
  ///OP
  if (!message.guild || message.author.bot) return; ///OP
  let args = message.content.split(" "); ///OP
  if (args[0] == `${prefix}cr`) {
    ///OP
    if (
      !message.guild.me.hasPermission("MANAGE_ROLES") || ///OP
      !message.member.hasPermission("MANAGE_ROLES") ///OP
    )
      return; ///OP
    if (!args[1] || !args[2])
      ///OP
      return message.reply(
        ///OP
        `Usage: ${args[0]} [role color] [role name]\nExample: ${
          ///OP
          args[0] ///OP
        } blue Admin` ///OP
      );
    try {
      ///OP
      let role = await message.guild.createRole({
        ///OP
        name: args.slice(2).join(" ") || "new role", ///OP
        color: args[1].toUpperCase() || null ///OP
      });
      await message.reply(`Done, Created **${role.name}** role!`); ///OP
    } catch (e) {
      ///OP
      message.reply(`Error! ${e.message || e}`); ///OP
    }
  }
});

//// كود معلومات الشخص او اليوزر
client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.

////كود معلومات البوت
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - client.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@684042312770387970>`, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have Permit To Use This Command**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) return message.reply("**Ping The Person**");
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("You Can't Ban A Person That Has A Higher Role Than Yours!");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**The Bot's Role Must Be Higher Than The Person's Role To Be Banned**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `
    );
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "inf")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
      console.log(inviteCode);
      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**Your Invites**",
          `[ You Have Invited **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**The Date That You Joined On **",
          ` [ Since  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**The invite that you used to join the server with**  ",
          `[ **${
            inviteCode &&
            inviteCode.code &&
            inviteCode.code.includes("discord.gg")
              ? inviteCode.code
              : `https://discord.gg/${inviteCode.code || "vHmbKTE"}`
          }** ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**Ping the person*");
    if (!reason) return message.reply("**write the reson for kick**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**You can't kick a person that has a higher role than the bot itself**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("You can't kick a person with a higher role than yours!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "avt") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`You need to put the Person **ID**`));
  } // Julian
}); // Codes - Toxic Codes

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

////كود معلومات السيرفر
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "unmute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message
        .reply("** You don't have 'Mute Members' permission**")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** You don't have the 'Muted' role **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You have to ping the person first**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Usage:", "Mute/unmute")
      .addField(
        "The Person has been unmuted succesfully:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MUTE_MEMBERS_OR_PERMISSIONS")
    )
      return message
        .reply("** You don't have Mute Members permission **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**The Person has been unmuted :white_check_mark:**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**The Person has been unmuted :white_check_mark: **")
            .catch(console.error);
        });
    }
  }
});

////كود ميوت او اسكات
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message
        .reply("** You Don't Have 'Mute Members' Permission **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** The person doesn't have 'Muted' role **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You have to ping the person first**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Usage:", "اunmute/mute")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MUTE_MEMBERS_OR_PERMISSIONS")
    )
      return message
        .reply("** You don't have Mute Members priveleges **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**The person has been muted :white_check_mark:**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**The person has been muted :white_check_mark:**")
            .catch(console.error);
        });
    }
  }
});

//// كود فتح واغلاق الروم
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" This command is only used in servers !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" You don't have permissions");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**The text  has been succesfully closed :no_entry: **");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" This command is only used in **servers** !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You don't have permissions to use this command");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**The text channel has been succesfully opened :white_check_mark:**");
      });
  }
});

client.on("error", err => {
  console.log(err);
});

client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});

//// كود سحب شخص
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});



client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **You Dont have permission**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "The channel has been cleaned",
        footer: {
          text: "Extrim Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }
 
     
});

  
///تعديل غير اساسي
////كود هيلب
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
    if (message.author.id == message.guild.ownerID) {
      message.author
        .send(
          `   

||:loudspeaker: invite Extrim bot to your server :heart: https://discord.com/api/oauth2/authorize?client_id=728396022056747118&permissions=8&scope=bot||

\`General Commands\` :postbox:
\`${prefix}bot\` : To view information about the bot
\`${prefix}user\` : To display information about you
\`${prefix}avt\` : It shows you photographed for anyone by ID
\`${prefix}avatar\` : To display your picture or a picture for the mention
\`${prefix}color\` : To choose your color in the server
\`${prefix}colors\` : Change your color 
\`${prefix}inf\` : The number of invitations to the server
\`${prefix}link\` : To get a link for the server
\`${prefix}invites\` : To See your invites
\`${prefix}topinvites\` : To see To see who has the most invitations
\`${prefix}Devs\` : To See the developers for the bot

\`Staff Commands\` :stars:
\`${prefix}clear\` : to clear the chat
\`${prefix}ban\` : To ban someone from the server
\`${prefix}kick\` : To kick someone from the server
\`${prefix}open\` : open the chat
\`${prefix}close\` : close the chat
\`${prefix}mute\` : To silence a person
\`${prefix}unmute\` : To decipher a person's silence
\`${prefix}new\` : Open the ticket
\`${prefix}closet\` : Delete ticket rome
\`${prefix}say\` : The bot keeps repeating your words
\`${prefix}embed\`: The bot keeps repeating your words with embed
\`${prefix}move\` : to get someone to your rome
\`${prefix}reply\` : To create an automatic response
\`${prefix}setLog\` : To determine the log rome
\`${prefix}setby\` : Determine the left rome
\`${prefix}setWelcomer <channel name>\` : To determine the Rome Welcome
\`${prefix}setMessage\` : To select the welcome message  
\`${prefix}setVc\` <channel name> : choose the room to make it VoiceOnilne (Number)
\`${prefix}vc off\` : to close the VoiceOnline (VC)
\`${prefix}allb\` : to show all bots in the server
\`${prefix}role\` : to give someone role
\`${prefix}role all\` : to give all in your server a role

\`\`Applications commands\`\` :pencil: 
\`${prefix}room1\` : to make apply rome
\`${prefix}room2\` : to make Reject and accept room
\`لقبول تقديم عضو : \`${prefix}قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
لرفض عضو : ${prefix}رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`

  `
        )
        .then(() => {
          message.author.send(`

\`Credit commands\` :credit_card: 
\`${prefix}credits\` : shows your or someone's balance 
\`${prefix}daily\` : get your daily salary


\`Music Commands \` :notes:
\`${prefix}Play\` : add a song to queue and play
\`${prefix}Pause\` : pauses the currently playing track
\`${prefix}Resume\` : continue the song 
\`${prefix}stop\` : stop the current song and clears the entire music queue
\`${prefix}forceskip\` : To directly skip the song
\`${prefix}Queue\` : display the queue of the current tracks in the playlist 
\`${prefix}skipto\` : To skip to the next song in the next music queue
\`${prefix}Skip\` : Skip to next song
\`${prefix}Volume\` : changes/shows the current volume
\`${prefix}np\` : shows what song the bot is currently playing
\`${prefix}repeat\` : toggles the repeat mode 
||There is a problem with the songs that will be solved soon ...||

\`Protection Commands\` :closed_lock_with_key:
\`${prefix}settings limit bans=settings limitsban
\`${prefix}settings limit kicks=settings limitskick
\`${prefix}settings limit remove channels=settings limitsroleD
\`${prefix}settings limit make channels=settings limitsroleC
\`${prefix}settings limit remove channels=settings limitstime
\`${prefix}settings limit bans time=settings limitsti
\`${prefix}antibots on\` : Prevent bots from entering
\`${prefix}antibots off\` : Allow bots to enter

`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**Your dm's must be opened to receive the commands**"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    } else {
      message.author
        .send(
          `  


\`General Commands\` :postbox:
\`${prefix}bot\` : To view information about the bot
\`${prefix}user\` : To display information about you
\`${prefix}avt\` : It shows you photographed for anyone by ID
\`${prefix}avatar\` : To display your picture or a picture for the mention
\`${prefix}color\` : To choose your color in the server
\`${prefix}colors\` : Change your color 
\`${prefix}inf\` : The number of invitations to the server
\`${prefix}link\` : to get a link for the server
\`${prefix}invite\` : To be to add the bot to your server

\`Staff commands\` :stars:
\`${prefix}clear\` : to clear the chat
\`${prefix}ban\` : To ban someone from the server
\`${prefix}kick\` : To kick someone from the server
\`${prefix}open\` : open the chat
\`${prefix}close\` : close the chat
\`${prefix}mute\` : To silence a person
\`${prefix}unmute\` : To decipher a person's silence
\`${prefix}new\` : Open the ticket
\`${prefix}closet\` : Delete ticket rome
\`${prefix}say\` : The bot keeps repeating your words
\`${prefix}move\` : to get someone to your rome
\`${prefix}reply\` : To create an automatic response
\`${prefix}setLog\` : To determine the log rome
\`${prefix}setby\` : Determine the left rome
\`${prefix}setWelcomer <channel name>\` : To determine the Rome Welcome
\`${prefix}setMessage\` : To select the welcome message  
\`${prefix}setVc\` <channel name> : choose the room to make it VoiceOnilne (Number)
\`${prefix}vc off\` : to close the VoiceOnline (VC)
\`${prefix}allb\` : to show all bots in the server
\`${prefix}role\` : to give someone role
\`${prefix}role all\` : to give all in your server a role

\`\`applications commands\`\` :pencil: 
\`${prefix}room1\` : to make apply room
\`${prefix}room2\` : to make Reject and accept room
\`لقبول تقديم عضو : \`${prefix}قبول
مثال: \`\`${prefix}قبول @منشن عضو \`\`
لرفض عضو : ${prefix}رفض
مثال: \`\`${prefix}رفض @منشن عضو لست متفاعل بشكل كافِ\`\`

  `
        )
        .then(() => {
          message.author.send(`

\`Credit commands\` :credit_card: 
\`${prefix}credits\` : shows your or someone's balance 
\`${prefix}daily\` : get your daily salary


\`Music Commands \` :notes:
\`${prefix}Play\` : add a song to queue and play
\`${prefix}Pause\` : pauses the currently playing track
\`${prefix}Resume\` : continue the song 
\`${prefix}stop\` : stop the current song and clears the entire music queue
\`${prefix}forceskip\` : To directly skip the song
\`${prefix}Queue\` : display the queue of the current tracks in the playlist 
\`${prefix}skipto\` : To skip to the next song in the next music queue
\`${prefix}Skip\` : Skip to next song
\`${prefix}Volume\` : changes/shows the current volume
\`${prefix}np\` : shows what song the bot is currently playing
\`${prefix}repeat\` : toggles the repeat mode 
||There is a problem with the songs that will be solved soon ...||


`);
        })
        .then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**Your dm's must be opened to receive the commands **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
});



   ////كود قيف اوي
client.on("message", async message => {
  var room;
  var title; //HactorMC
  var duration; //HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "giveaway")) {
    //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(`**من فضلك اكتب اسم الروم بدون منشن ( # )**`)
      .then(msgg => {
        message.channel
          .awaitMessages(filter, {
            max: 1, //HactorMC
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            let room = message.guild.channels.find(
              gg => gg.name === collected.first().content
            );
            if (!room)
              return message.channel.send(
                "**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**"
              );
            room = collected.first().content;
            collected.first().delete();
            msgg.edit("**اكتب مدة القيف اواي بالدقائق**").then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1, //HactorMC
                  time: 20000,
                  errors: ["time"]
                })
                .then(collected => {
                  if (isNaN(collected.first().content))
                    return message.channel.send(
                      ":heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**"
                    );
                  duration = collected.first().content * 60000;
                  collected.first().delete();
                  msgg
                    .edit(
                      ":eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**"
                    )
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 20000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          title = collected.first().content;
                          collected.first().delete();
                          try {
                            let giveEmbed = new Discord.RichEmbed()
                              .setAuthor(
                                message.guild.name,
                                message.guild.iconURL
                              )
                              .setTitle(title)
                              .setDescription(
                                `المدة : ${duration / 60000} دقائق`
                              )
                              .setFooter(
                                message.author.username,
                                message.author.avatarURL
                              );
                            message.guild.channels
                              .find(gg => gg.name === room)
                              .send(giveEmbed)
                              .then(m => {
                                let re = m.react("🎉");
                                setTimeout(() => {
                                  let users = m.reactions.get("🎉").users;
                                  let list = users
                                    .array()
                                    .filter(u => u.id !== m.author.id);
                                  let gFilter =
                                    list[
                                      Math.floor(Math.random() * list.length) +
                                        0
                                    ];
                                  if (users.size === 1)
                                    gFilter = "**لم يتم التحديد**";
                                  let endEmbed = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.username,
                                      message.author.avatarURL
                                    )
                                    .setTitle(title)
                                    .addField(
                                      "انتهى القيف اواي !",
                                      `الفائز هو : ${gFilter}`
                                    )
                                    .setFooter(
                                      message.guild.name,
                                      message.guild.iconURL
                                    );
                                  m.edit(endEmbed);
                                }, duration);
                              });
                            msgg.edit(
                              `:heavy_check_mark:| **تم اعداد القيف اواي**`
                            );
                          } catch (e) {
                            msgg.edit(
                              `:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`
                            );
                            console.log(e);
                          }
                        });
                    });
                });
            });
          });
      });
  }
});




//all copyrighit for revenge https://github.com/Bowlingtoolkit

///تعديل غير اساسي
///تقدر الصورة الخلفية ، شوف الشرح الرابط فوق اول الكود
/// كود الوان
client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(60)
        .addText(`Color list`, 375, 40);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});

/// كود تعين اللوق
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`The Real Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`The Real name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

///////////////////

///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته:heart:**");
    message.channel.sendFile("");
  }
});

client.on("message", message => {
  if (message.content === "Hop Hop") {
    message.channel.send("Hop Hop OP On The Top");
    message.channel.sendFile("");
  }
});



client.on("message", message => {
  if (message.content === "who is lucky?") {
    message.channel.send("**my love :relieved: :heart:**");
    message.channel.sendFile("");
  }
});

client.on("message", message => {
  if (message.content === "prefix") {
    message.channel.send("**My prefix is ** **$**");
    message.channel.sendFile("");
  }
});

client.on("message", message => {
  if (message.content === "uptime") {
    message.channel.send("**Done**");
    message.channel.sendFile("");
  }
});

////تعديل غير اساسي
/// كود اختيار لون

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});

///تعديل اساسي
///لو تبي تعطل كود بدون حذفه حط هذي الرموز

/*
///test
*/

///// كود خروج الاعضاء

client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** ping the room . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**You don't have permissions . ❌**");
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |The Left channel has been set**`
    );
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**مع السلامه تشرفنا بك ✋** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.find(gg => gg.name === "log"); //// تعديل اساسي
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});

/////كود سرعة البوت او البينق
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    var Bping = `${Math.round(client.ping)}`;

    const E1ping = new Discord.RichEmbed()
      .setTitle("ــــــــــــــــــــــــــــــ")
      .addField(
        `**BOT Ping Is** :__${Bping}📶__`,
        "ــــــــــــــــــــــــــــــ"
      )
      .setFooter(`Requested by | ${message.author.tag}`)
      .setColor("RANDOM");
    message.channel.send(E1ping);
  }
});

let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: For Protection related stuff is the settings commands only available for the owner**"
      );
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**:1234: | Send a number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers only ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**:1234: | Send a number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers only ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**:1234: | Send A Number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers only ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**:1234: | Send a number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers only ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | Send a Number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers Only ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelC")) {
      if (!num) return message.channel.send("**:1234: | Send a number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers Only ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | Send a number ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | Numbers Only ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} has deleted a lots of channels**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} has deleted a lots of channels **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} has deleted a lot of roles **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} has deleted a lot of roles **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} tried banning everyone **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} tried banning everyone **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} tried banning everyone **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: For Protection Related Stuff Is The Settings Commands Only Available For The Owner*"
      );
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: For Protection Related Stuff Is The Settings Commands Only Available For The Owner**"
      );
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});

client.on("message", async message => {
  const moment = require("moment"); //npm i moment
  const ms = require("ms"); //npm i ms
  // var prefix = '' //Bot Prefix !
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "gcreate")) {
    let embed1 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Missing the following permission `MANAGE_GUILD`");

    let embed2 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `room` name without mentioning it");

    let embed3 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Wrong room name");

    let embed4 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `time`");

    let embed5 = new Discord.RichEmbed()
      .setColor()
      .setDescription(
        "Wrong time format\nExample of time format: 1s / 1m / 1h / 1d / 1w"
      );

    let embed6 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `gift`");

    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(embed1);
    message.channel.send(embed2).then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            gg => gg.name === collected.first().content
          );
          if (!room) return message.channel.send(embed3);
          room = collected.first().content;
          collected.first().delete();
          msg.edit(embed4).then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                  return message.channel.send(embed5);
                duration = collected.first().content;
                collected.first().delete();
                msg.edit(embed6).then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      title = collected.first().content;
                      collected.first().delete();
                      msg.delete();
                      message.delete();
                      try {
                        let giveEmbed = new Discord.RichEmbed()
                          .setColor()
                          .setTitle(`${title}`)
                          .setDescription(
                            `React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`
                          );
                        //.setFooter(message.author.username, message.author.avatarURL);
                        message.guild.channels
                          .find(gg => gg.name === room)
                          .send(" :tada: **Giveaway** :tada:", {
                            embed: giveEmbed
                          })
                          .then(m => {
                            let re = m.react("🎉");
                            setTimeout(() => {
                              let users = m.reactions.get("🎉").users;
                              let list = users
                                .array()
                                .filter(
                                  u => (u.id !== m.author.id) !== client.user.id
                                );
                              let gFilter =
                                list[
                                  Math.floor(Math.random() * list.length) + 1
                                ];
                              if (gFilter === undefined) {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(
                                    `Winners : no enough number of reaction so there is no winner`
                                  )
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              } else {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(`Winners : ${gFilter}`)
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              }
                              if (gFilter === undefined) {
                                // message.guild.channels.find("name" , room).send("No enough number of reactions")
                              } else {
                                message.guild.channels
                                  .find(gg => gg.name === room)
                                  .send(
                                    `**Congratulations ${gFilter}! You won The \`${title}\`**`
                                  );
                              }
                            }, ms(duration));
                          });
                      } catch (e) {
                        message.channel.send(
                          `:heavy_multiplication_x:| **i Don't Have Prem**`
                        );
                        console.log(e);
                      }
                    });
                });
              });
          });
        });
    });
  }
});

///كود حذف الروابط
/// تعديل اساسي حذف روابط الديسكورد
/// تم حذف الكود لانه يسبب مشاكل مثلا يحذف كل الروابط حتى من الادارة ، يمكنك استخدام بوت بروبوت في الحماية من الروابط

const replyMSG = JSON.parse(fs.readFileSync("./replyMSG.json", "utf8"));

function saveReplay() {
  fs.writeFile("./replyMSG.json", JSON.stringify(replyMSG), function(err) {
    if (err) throw err;
  });
}

/////كود صنع رد تلقائي
client.on("message", async message => {
  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!replyMSG[message.author.id])
      replyMSG[message.author.id] = {
        contentmessage: "none",
        replayMessage: "none"
      };
    saveReplay();
    let contmessage;

    let filter = m => m.author.id === message.author.id;
    message.channel.send(" |** Please Type the message now..** ").then(msg => {
      message.channel
        .awaitMessages(filter, {
          //R.I.P Royal Bot!
          maxMatches: 1,
          time: 12000,
          errors: ["time"]
        })

        .then(collected => {
          contmessage = collected.first().content;
          msg.edit(":scroll: | Type the respond... :pencil2: ");

          message.channel
            .awaitMessages(filter, {
              maxMatches: 1,
              time: 12000,
              errors: ["time"]
            })

            .then(async collectedd => {
              replyMSG[message.author.id] = {
                contentmessage: contmessage,
                replayMessage: collectedd.first().content
              };
              saveReplay();
              var embed1 = new Discord.RichEmbed()
                .setTitle(`Done The Autoreply Setup`)
                .setThumbnail(message.author.avatarURL)
                .setColor("GRAY")
                .setDescription(
                  `
                    Message:
                    ${contmessage}
                    Reply:
                    ${collectedd.first().content}`
                );
              let steve = await client.fetchUser("359541019836022784");
              embed1.setFooter(
                `Auto Respond`,
                steve ? steve.displayAvatarURL : message.author.displayAvatarURL
              );
              msg.edit("  |** Done...**");

              message.channel.send(embed1);
            });
        });
    });
  }
});

client.on("message", message => {
  if (
    !replyMSG[message.author.id] ||
    !replyMSG[message.author.id].contentmessage ||
    !replyMSG[message.author.id].replayMessage
  )
    return;
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(`\`#\` ${reply}`);
  }
});

/////كود كريدت

const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (args[0].toLowerCase() == `${prefix}credit`) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]) || [",", "."].includes(args[2]))
        return message.channel.send(`**:x: | Error**`);

      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      let resulting =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] - args[2] * (5 / 100));
      let tax =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let Canvas = require("canvas");
      let canvas = Canvas.createCanvas(108, 40);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial Bold";
      ctx.fontSize = "20px";
      ctx.fillStyle = "#ffffff";
      message.channel
        .send(
          `**${
            message.author.username
          }, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
        )
        .then(async essss => {
          message.channel.send(`\`${num}\``).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  essss.delete();
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
                      message.author.username
                    }; (ID (${message.author.id})\`\`\``
                  );
                  m.delete();
                  credits[author].credits += Math.floor(
                    -resulting.toLocaleString()
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting.toLocaleString()
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  essss.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, your daily :dollar: credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm:  | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); //

client.on("message", async message => {
  let Fire = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (Fire === "addcredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += +args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`** Adedd Money For : \`${args[1]}\` Done **`);
  } else if (Fire === "removecredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**, Remove Money For : \`${args[1]}\`**`);
  }
});

const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const prettySeconds = require("pretty-seconds");
const fsn = require("fs-nextra");

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8")); //ملف تخزين كود الويلكم

//كود الويلكم

client.on("guildMemberAdd", async member => {
  if (!welcome) return;
  if (!welcome[member.guild.id]) return;
  var findingWlcChannel = welcome[member.guild.id]
    ? welcome[member.guild.id].channel
    : "null";
  const channel = await member.guild.channels.find(
    r => r.name == findingWlcChannel
  );
  if (!channel) return;
  if (channel) {
    const imageUrlRegex = /\?size=2048$/g; ///تعديل غير اساسي
    const wlcImage = await fsn.readFile("./welcome111.png"); //اسم الصورة
    let result = await fetch(
      member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128")
    );
    if (!result.ok) throw new Error("Failed to get the avatar!");
    let avatar = await result.buffer();

    let name =
      member.user.username.length > 12
        ? member.user.username.substring(0, 11) + "..."
        : member.user.username;

    // تعديل غير اساسي : هنا خيارات الصورة لو تبى تغيرها

    //Welcome Image (background)
    var imageWidth = 500; //عرض الصورة
    var imageHeight = 266; //ارتفاع الصورة

    //Avatar
    var imageX = 250; //X coordinate
    var imageY = 145; //Y coordinate
    var imageRadius = 110; //نصف قطر الصورة الدائرية

    //Member Name
    var nameSize = "12pt"; //حجم خط الاسم
    var nameKind = "Source Sans Pro (OT1)"; //نوع خط الاسم
    var nameColor = "#ff9933"; //لون خط الاسم

    //Name Position
    var nameX = 247; //position x
    var nameY = 275; //position y

    let buffer = await new Canvas(500, 300)
      .addImage(wlcImage, 0, 0, imageWidth, imageHeight)
      .addCircularImage(avatar, imageX, imageY, imageRadius)
      .setTextAlign("center")
      .setTextFont(`${nameSize} ${nameKind}`)
      .setColor(nameColor)
      .addText(name, nameX, nameY)
      .toBuffer();
    const filename = `Baron-wlc-${member.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await channel.send(attachment);
  }
});

//تحديد روم الويلكم
const wait = require("util").promisify(setTimeout);
client.on("ready", async () => {
  wait(1000);

  await client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
var gg2;

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off",
      channel: null
    };

  if (welcome[member.guild.id].by === "Off") return;
  let channel = member.guild.channels.find(
    c => c.name == welcome[member.guild.id].channel
  );
  if (!channel) return;

  await member.guild.fetchInvites().then(async guildInvites => {
    const ei = await invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = await guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter1 = await invite.inviter;
    const inviter =
      (await client.users.get(invite.inviter.id)) ||
      client.users.get(member.guild.owner.user.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return console.log("I can't find welcomeChannel");
    let gg1 = await welcome[member.guild.id].msg.replace(
      "[member]",
      `<@!${member.id}>`
    );
    if (!inviter1 || !inviter1.id) {
      gg2 = await gg1.replace("[inviter]", `<@${member.guild.ownerID}>`);
    } else {
      gg2 = await gg1.replace("[inviter]", `<@${inviter1.id}>`);
    }
    setTimeout(() => {
      logChannel.send(`${gg2}`);
    }, 2000);
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  });
});
client.on("message", async message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!welcome[message.guild.id]) {
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField(
          "Default Message:",
          `**Welcome [member], You Joined by [inviter] invite**`
        )
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: "On",
        msg: `**Welcome [member], You Joined by [inviter] invite**`
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    } else if (welcome[message.guild.id].channel) {
      let msg = await welcome[message.guild.id].msg;
      let by = await welcome[message.guild.id].by;
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField("Default Message:", msg)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: by,
        msg: msg
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    }
  }
});

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setMessage")) {
    if (!welcome[message.guild.id] || !welcome[message.guild.id].onoff == "On")
      return message.channel.send(
        `**please type \`${prefix}setWelcomer\` first **`
      );
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    let room = welcome[message.guild.id].channel;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(
        `**من فضلك اكتب رسالة الترحيب الان:
لعمل منشن للعضو او الشخص الذى قام بدعوتة
Ex : 
\`[member] Joined the server by [inviter]\`**`
      )
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            msg.edit("**تم الاعداد بنجاح**").then(msg => {
              let embed = new Discord.RichEmbed()
                .setTitle("**Done The Welcome Msg Has Been Setup**")
                .addField("Message:", `${thisMessage}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`${client.user.username}`);
              message.channel.sendEmbed(embed);
              welcome[message.guild.id] = {
                channel: room,
                onoff: "On",
                by: "On",
                msg: thisMessage
              };
              fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
                if (err) console.error(err);
              });
            });
          });
      });
  }
});

///كود منشن بوتات

client.on("message", message => {
  if (message.content === prefix + "allb") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});

////كود رابط
////تعديل غير اساسي

client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "link") {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** تم ارسال الرابط على الخاص ، اذا لم يصلك افتح الخاص  **"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("طلب بواسطة: " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.RichEmbed().setColor("RANDOM")
      .setDescription(`** مدة الرابط : يوم 
 عدد استخدامات الرابط : 5 **`);

    message.author.sendEmbed(Embed11);
  }
});

////لايحتاج تعديل
////كود الفويس اونلاين

let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8")); // ملف تخزين الفويس اونلاين
client.on("message", message => {
  if (message.content.startsWith(prefix + "setVc")) {
    let channel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحية :rolling_eyes: ** "
      );
    let channelfind = message.guild.channels.find(c => c.name == channel);
    if (!channel)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: " +
          `${prefix}setVc <Channel name>`
      );
    if (!channelfind)
      return message.channel.send(`I can't find this channel \`${channel}\``);
    vojson[message.guild.id] = {
      stats: "enable",
      chid: channelfind.id,
      guild: message.guild.id
    };
    channelfind.setName(
      `Voice Online : ${message.guild.members.filter(m => m.voiceChannel).size}` ///تعديل غير اساسي تعديل اسم روم الفويس اونلاين
    );
    message.channel.send("**Done The Voice Online  Is Turned On**");
  }
  if (message.content.startsWith(prefix + "vc off")) {
    // ايقاف الفويس اونلاين
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "ADMINISTRATOR ليس لديك صلاحية :rolling_eyes:"
      );

    message.guild.channels
      .find(gg => gg.name === vojson[message.guild.id].chid)
      .delete();
    vojson[message.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online Is Turned Off**");
  }
  fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
    if (err) console.error(err);
  });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (!vojson[oldMember.guild.id])
    vojson[oldMember.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: "undefined"
    };
  if (vojson[oldMember.guild.id].stats === "enable") {
    let ch = vojson[oldMember.guild.id].chid;
    let channel = oldMember.guild.channels.get(ch);
    if (!channel) return;
    let guildid = vojson[oldMember.guild.id].guild;
    channel.setName(
      `Voice Online : ${
        oldMember.guild.members.filter(m => m.voiceChannel).size
      }` ///تعديل غير اساسي تغير اسم روم الفويس اونلاين
    );
  }
  if (vojson[oldMember.guild.id].stats === "disable") {
    return;
  }
});

client.on("ready", () => {
  console.log("hi");
});

////تعديل غير اساسي

client.on("message", message => {
  if (message.content.startsWith(prefix + "تقديم")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find(gg => gg.name === "apply");
    if (!channel)
      return message.reply(
        "**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **your real name   ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **how old are you 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(
                        message.member +
                          ", **are you going to be active in the role?🎙**"
                      );
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member +
                                  ", **are you will respect the rules? 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **why do we have to accept you? 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....Processing|جارى جمع البيانات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**تقديم على رتبه** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم|name`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر|old`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`هل سوف يتفاعل ؟|active?`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`هل سوف يحترم القوانين ؟|respect the rules`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها|why do we have to accept you?`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Name : ${message.author.username}\nID User : ${message.author.id}`,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "room1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("|applyالتقديمات", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send(
      "**✅ تم انشاء روم التقديمات|apply room Successfully بنجاح**"
    );
  }
});

client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **ليس لديك صلاحيات :rolling_eyes:**");
  if (msg.toLowerCase().startsWith(prefix + "rerole")) {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد سحب منه الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          " اانت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم سحب من **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members.forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});

client.on("message", async message => {
  if (!message.guild) return;
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.find(gg => gg.name === role);
  if (message.content.startsWith(prefix + "قبول")) {
    let acRoom = message.guild.channels.find(gg => gg.name === "القبول-الرفض");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("منشن شخص");
      if (!role) return message.reply("ادخل اسم رتبة");
      if (!mySupport) return message.reply("هذه الرتبة غير موجودة");
      if (mention.roles.has(mySupport))
        return message.reply("هذا الشخص معه الرتبة مسبقا");
      if (mySupport.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`
        );
      });
    }
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "رفض")) {
    if (!message.channel.guild) return;

    let mention = message.mentions.members.first();
    let acRoom = message.guild.channels.find("name", "القبول-الرفض");
    let rrrr = message.content.split(/ +/).slice(2);
    let reason = rrrr.join(" ");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("منشن شخص");
    message.react("✅");
    acRoom
      .send(
        `**${mention} تم رفضك للأسف **
السبب : \`${reason}\``
      )
      .then(m => m.react("✅"));
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "room2")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("القبول-الرفض", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**");
  }
});
client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  let args = msg.content.split(" ");

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `avatar`) {
    if (msg.channel.type === "dm")
      return msg.channel.send(
        "Nope Nope!! u can't use avatar command in DMs (:"
      );
    let mentions = msg.mentions.members.first();
    if (!mentions) {
      let sicon = msg.author.avatarURL;
      let embed = new Discord.RichEmbed()
        .setImage(msg.author.avatarURL)
        .setColor("#5074b3");
      msg.channel.send({ embed });
    } else {
      let sicon = mentions.user.avatarURL;
      let embed = new Discord.RichEmbed().setColor("#5074b3").setImage(sicon);
      msg.channel.send({ embed });
    }
  }
});

//// تغير غير اساسي
///// كود ميوزك

let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["s", "تخطى"] },
  stop: { cmd: "stop", a: ["ايقاف"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["تخطي الكل", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 25, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("❌");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});

var statuss = ["$help", "Thx for using Extrim bot", "Extrim is in Beta now!"]; // بالإمكان اضافة المزيد بدون التعديل في الكود
var secound = 3; // عدد الثواني المحددة
client.on("ready", () => {
  var timeing = Math.floor(secound * 1000);
  setInterval(function() {
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], {
      type: "PLAYING",
      url: "http://twitch.tv/nil"
    });
  }, timeing);
});

client.on("ready", () => {
  // افنت التشغيل
  setInterval(function() {
    client.guilds.forEach(g => {
      var role = g.roles.find("name", "👑OWNER👑");
      if (role) {
        role.edit({ color: "RANDOM" });
      }
    });
  }, 10000); //لازم تخلي رتبه البوت اعلى من رتبه الون تبعه
});



const online = [
  "Extrim Bot On The Top",
  "Hi Im Extrim Bot My perfix is $",
  "What?"
];

client.on("message", message => {
  if (message.content.startsWith("<@!728396022056747118>")) {
    message.reply(online[Math.floor(Math.random() * online.length)]);
  }
});





  client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "clearOP213124frrgr")){
      let args = msg.content.split(" ").slice(1).join(" ");
      if(!args)  return msg.reply(`**${msg.content} <Number Messages Deleted?>**`)
      msg.reply("**Are You Sure Of The Deleted Messages?**").then(o => {
        o.react("✅")
        .then(()=> o.react('❎'))
        .then(()=> o.react("✅"))
        let reaction1 = (reaction,user) => reaction.emoji.name === "✅" && user.id === msg.author.id
        let reaction2 = (reaction,user) => reaction.emoji.name === "❎" && user.id === msg.author.id
        let react3 = o.createReactionCollector(reaction1, { time: 12300})
        let react4 = o.createReactionCollector(reaction2, { time: 12300})
        react3.on("collect", r => {
         msg.channel.bulkDelete(args)
          msg.reply(`**Done Deleted Messages ${args}**`).then(op => {
          op.delete(1200)
         o.delete(1200)
         msg.delete(1200)
       })
       react4.on("collect", r => {
        msg.reply(`**Done Deleted Messages Has Been Cancel**`).then(ob => {
          ob.delete(1200)
          o.delete(1200)
          msg.delete(1200)
        })
        })
      })
    })
    
    }
  });



client.on("guildCreate", (guild) => {
  let channel = client.channels.get(guild.channels.filter(c => c.permissionsFor(client.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0])    
  channel.send(`
  
Thanks For adding the bot to your Server | شــكرا لاضافه البوت
  
  
  
  
  `)
});



client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("للأسف لا تمتلك صلاحية MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor("BLACK");
    message.channel.sendEmbed(say);
    message.delete();
  }
});



client.on('message', message => {
    if (message.content.startsWith("$Devs",)) {
    message.channel.send({
    embed: new Discord.RichEmbed()

       .setThumbnail('https://cdn.discordapp.com/attachments/691278599331774475/778574921718169650/40e675277520adb64ce3f4680dbd888d.png')

       .setColor('BLACK')
       .setTitle('``Developer`` ')
       .addField('**Name**' ,`<@684042312770387970>` , true)
       
    })
    }
    });


client.on('message',message =>{
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `You invited 2 **${nul}** people`)
      .setColor('BLACK')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("BLACK")
                        .addField(`${message.author.username}`, `You did not invite anyone to this server`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("BLACK")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("BLACK")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('BLACK')
message.channel.send({ embed: embed });
return;
}
})
}

});

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinvites')) {
     
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  });




 client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasa86325802635809263402ollooop`) {
    let embed = new Discord.RichEmbed()
      .addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}rnurguhruhe98ghy894h38hsdhhg`) {
    if (mtickets === false)
      return message.channel.send(
        `**تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**تـم فـتـح تـذكرتـك**`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });
 
      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}m235235235t235235235i235235235ck235235235e235235235ts`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `**هـذا الأمـر للأدارة فـقـط**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `**تـم اغـلاق نـظـام الـتذاكـر**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `**تـم اغـلاق نـظـام الـتذاكـر**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}c235235235l235252235235235os325235e`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
      `**انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`**هـذا لـيـس روم تـيـكـيـت**`);
 
    message.channel.send(
      `**جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `remove`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`**This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `**${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done \nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** \nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done \nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeeeestart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة البوت لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
 
        
      
    
  }
});
 
client.on("ready", () => {
let BotOnline = client.channels.get("816435963101184020");// ايدي الروم
  
  let online = new Discord.RichEmbed()
    .setTitle('Bot Restart')
    .setColor("GREEN")
   .addField('Guilds Info', `Users: **${client.users.size}** \nChannels: **${client.channels.size}** \nGuilds **${client.guilds.size}** `)
   .addField('Some bot  Info', `Platform: **${process.platform}** \nArch **${process.arch}** \nNode Version **${process.version}** \nPrefix **${prefix}**`) // process.platform
    .setTimestamp();
  BotOnline.send(online);

});


client.on('message', message => {

  if(message.content.startsWith(prefix + "frole")) {
  let args = message.content.split(" ").slice(1).join(" ");
    let role = message.guild.roles.find(r => r.name === `${args}`);
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    
    let RI = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(RI);
  }
});




client.on("message", function(message) {
  if (message.content.startsWith(prefix + "invite1321")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
    .setColor("RANDOM")
     .addField("الرجاء اختيار نوع جهازك", "Computer | Phone", false)
      .addField("Phone | تلفون", "📱", true)
      .addField("Computer | كمبيوتر", "🖥️", true)
    .setFooter("Extrim Bot")
    message.channel.send(RpsEmbed).then(msg => {
      msg.react("📱");
      msg.react("🖥️")
        .then(() => msg.react("📱"))
        .then(() => msg.react("🖥️"))
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "📱" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "👑" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🖥️" && user.id === message.author.id;
      let reaction4Filter = (reaction, user) =>
        reaction.emoji.name === "🖥️" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 20000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 19000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 18000
      });
      let reaction4 = msg.createReactionCollector(reaction4Filter, {
        time: 18000
      });
      reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("Click Here To Invite The Bot | اضغط هنا لدعوة البوت")
.setURL(
  `https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
);
        message.author.send(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
        message.reply("تم ارسالك لينك دعوة بوت في خاص");
      });
      reaction2.on("collect", r => {
        const embed = new Discord.RichEmbed()
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png"
          )
          (`
      


`);
        message.author.sendEmbed(embed);
        message.reply("تم ارسالك بلخاص");
      });
      reaction3.on("collect", r => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("Click Here To Invite The Bot")
.setURL(
  `https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
);
        message.author.sendEmbed(embed);
        message.reply("تم ارسالك بلخاص");
      });
      reaction3.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.』
`);
      });
    });
  }
});


client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bc')) {
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 Broadcast sends to a specific role without embed
 
 🏅 Broadcast sends to a specific role with embed
 
 📭 Broadcast sends for all members with embed
 
 📧 Broadcast sends for all members without embed
 
 🔵 Broadcast sends for online members only without embed
 
 🔷 Broadcast sends for online members only with embed
 
 ❌ To Cancel the process
 -=-=-=-=-=-=-=-=-=-=
 `)
 
 message.channel.sendEmbed(recembed).then(msg => { 
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() =>  msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))

 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8

             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8

             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });

             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });

             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {

    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'yes') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'no') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {

                if(collected.first().content === 'yes') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                

message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
m.send(`${m}`)       
        
    })
}
if(collected.first().content === 'no') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
                
    })}
})
})
        })
    })
})

 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
    
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle('Successfully Canceled :x:')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});





client.on('message', message => {
    if (message.content.startsWith("$hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```type the name of person you want hack```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('Done you have been hacked')
           }, 33000) 
           });
         }
 })  //Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes





const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Nil");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart44") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        console.log(`Bot Successfully Restarted`);
    }
  
  }); //Toxic Codes



client.on('message', message => {
    if (message.guild) return undefined;
    var roomid = "782732648215740426";
    var room = client.channels.get(roomid);
    if (!room) return undefined;
    var emb = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor(message.author.username,message.author.displayAvatarURL)
    .setDescription(`**Message from ${message.author} in the bot dm**\n\`\`\`apache\nMessage: ${message.content}\`\`\``)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();
    room.send(emb);
});




client.on("message", message => {  //iTzMurtaja
    if(message.content.startsWith(prefix + "emoji")) { //iTzMurtaja
        if(message.author.bot) return; //iTzMurtaja
        var emojiid =  message.content.split(" ").slice(1).join(" ") //iTzMurtaja
        console.log(emojiid) //iTzMurtaja
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage
${prefix}emoji <EmojiID>`); //iTzMurtaja
        else    //iTzMurtaja
        message.channel.send("This is the emoji that you requested:-",
          { //iTzMurtaja
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
          }) //iTzMurtaja
        }  //iTzMurtaja
}) //iTzMurtaja


client.on('message', message => {
  if (message.content === prefix + 'cat') {
    message.react(`🐱`)
      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")
  }
});


client.on('message', message =>{
  if(message.content.startsWith(prefix + 'addemoji')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});




client.on("message", msg => {
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);  
if(cmd === `${prefix}dm`){
  let mentions = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!mentions) return msg.reply("**منشن العضو**").then(men => {
      men.delete(2222)
      msg.delete()
  })
  let args2 = args.join(" ").slice(22);
  if(!args2) return msg.reply("**اكتب الرسالة**").then(am => {
      am.delete(2222)
      msg.delete()
  })
let emb = new Discord.RichEmbed()
.setTitle("**DM**")
.addField("**الرسالة**", args2)
.addField("**الرسالة لـ**", mentions)
.addField("**من قبل**", msg.author)
.setDescription(`**هل انت متاْكد برسالتك؟
✔ | نعم

❌ | لا**`)
msg.channel.send(emb).then(od => {
  od.react("✔")
  .then(()=> od.react("✔"))
  .then(()=> od.react("❌"))
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
cn.delete(2222)
msg.delete()
})
od.delete(2222)
})
reaction1.on("collect", r => {
let embd = new Discord.RichEmbed()
.setTitle("**DM**")
.setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد

✨ | بدون امبد
**`)
msg.delete()
od.delete(2222)
msg.channel.send(embd).then(bo => {
bo.react("🚩")
.then(() => bo.react("🚩"))
.then(() => bo.react("✨"))
let r1 = (reaction, user) => reaction.emoji.name === '🚩' && user.id === msg.author.id;
let r2 = (reaction, user) => reaction.emoji.name === '✨' && user.id === msg.author.id;

let rec1 = bo.createReactionCollector(r1, { time: 12000 });
let rec2 = bo.createReactionCollector(r2, { time: 12000 });
rec1.on("collect", r => {
let embde = new Discord.RichEmbed()
.setTitle("**رسالة**")
.addField("**الرسالة**", args2)
.addField("**من قبل**", msg.author)
bo.delete(2222)
msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
  op.delete(2222)
  msg.delete()
})
mentions.send(embde)
})
rec2.on("collect", r => {
  mentions.send(args2)
  msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
      ede.delete(2222)
      bo.delete(2222)
      msg.delete()
     
  })
  })

})

}) 
})
}
})



client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  if (command === prefix + "warn") {
    // Warn2 و Warn1  اصنع رتبة ب اسم
    var user = message.guild.member(message.mentions.users.first());
    var warn1 = message.guild.roles.find("name", "Warn1");
    var warn2 = message.guild.roles.find("name", "Warn2");
    if (!message.channel.guild) {
      message.channel.send("هذه الأوامر للسيرفرات فقط !!");
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("**  لا يوجد لديك صلاحية ADMINISTRATOR**");
    } else if (!warn1) {
      message.channel.send("لم يتم العثور على رتبة `Warn1`");
    } else if (!warn2) {
      message.channel.send("لم يتم العثور على رتبة `Warn2`");
    } else if (!user) {
      message.channel.send("لم تقم بوضع اسم الشخص");
    } else if (!message.guild.member(user).roles.has(warn1.id)) {
      message.channel.send("Done !");
      user.addRole(warn1);
      message.channel.send(message.member + " تم انذار");
    } else if (!message.guild.member(user).roles.has(warn2.id)) {
      message.channel.send("Done !");
      user.addRole(warn2);
      message.channel.send(message.member + " تم الإنذار رقم 2");
    } else {
      user.ban();
      message.channel.send("تم حظر الشخص بسبب الإنذارات المتكررة");
    }
  } //${! .₳Ⱨ₥ɆĐ ♡}#0561
});



client.on("message", message => {
  if (message.channel.type === "dm") {  

      message.channel.startTyping();  
      setTimeout(() => {  
        message.channel.stopTyping();  
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }  
});


client.on('message',message =>{ // MdAx77x CopyRght
    if(!message.channel.guild) return;
if(message.content =='$members') // Mdax77x | Toxic Codes CopyRight
var E2Mdax = new Discord.RichEmbed()

.setTitle('==========🌷| Members info==========')
.addField('** Members count👥.:**',`__** [ ${message.guild.memberCount} ]**__`,true) // Mdax77x | Toxic Codes CopyRight
.addField('📗|online',` ${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📓| offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) // Mdax77x | Toxic Codes CopyRight
.setFooter(`Requested By | ${message.author.tag}`) // Mdax77x | Toxic Codes
.addField('**==============**',true)
.setColor('RANDOM')
message.channel.send(E2Mdax); 
});



   
client.on("message", async function (message) {
    if (!prefix) {
        var prefix = "$";
    }
    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
    var args = message.content.slice(prefix.length).split(" ");
    var command = args[0];
    if (command == "aboutserver") {
        var { name, owner, id, memberCount, roles, channels, iconURL} = message.guild;
        var invite = await message.channel.createInvite();
        var embed = new Discord.RichEmbed()
        .setDescription(`ServerName - ${name}\nserverOwner - <@${owner.user.id}>\nServerID - ${id}\nMember - ${memberCount}\nRoles - ${roles.size}\nChannels - ${channels.size}\nInviteLink - [Invite](${invite})`)
        .setTimestamp();
        if (iconURL) {
            embed.setThumbnail(iconURL);
        }
        message.channel.send({
            embed: embed
        });
    }
});



client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`⛔ | I cant change **${user.user.username}**'s nickname because his role highest than my role!`);
message.guild.member(user.user).setNickname(`${nick}`).then(() => {
message.channel.send(`Successfully changed **${user.user.username}** nickname to **${nick}**`)
}).catch(console.error); // Toxic Codes
} // Julian
}); // Codes

   