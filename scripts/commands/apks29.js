const fs = require("fs");
module.exports.config = {
	name: "apks29",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs009",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤒")==0 || event.body.indexOf("🤕")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("💦")==0) {
		var msg = {
				body: "_____🔐🍒🌻_____>🐰🦋🌸\n\n>🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 𝐈 𝐰𝐢𝐬𝐡 🖤🦋🌸\n\n─༅༎•🌺 ভলো থাকুক সেই আন্টি > 🍁🍂\n\n─༅༎•🍂 যার কাছে আমার মিস্টি হবু বউ টা আছে ->3 💚🔐\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ww.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }