const fs = require("fs");
module.exports.config = {
	name: "tmi090",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tmi090",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tmi")==0 || event.body.indexOf("tui")==0 || event.body.indexOf("tmi")==0 || event.body.indexOf("😍")==0) {
		var msg = {
				body: "___💜🔐🌈___ \n\n– 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭 \n\n🐰!<‘ —’পারফেক্ট’ কাউকে পাবার থেকে ___💜🔐 \n\n🙂༎কাউকে’ পারফেক্ট’ বানিয়ে নিতে পারাটা’ বড় অর্জন -!!-)🌼💜 \n\n___🍒🖇️✨___\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/tui.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }