const fs = require("fs");
module.exports.config = {
	name: "apks8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "status09",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😔")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("status")==0 || event.body.indexOf("sad")==0) {
		var msg = {
				body: ">🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 🖤🦋🌸\n\n😽🍒-- 𝐈𝐍 𝐓𝐡𝐞 𝐖𝐨𝐫𝐥𝐝 𝐎𝐟 -!!❤️🌸\n\nএকটা গেলে আরেকটা আসবে🙂🍒\n\n-- 𝐁𝐮𝐭 𝐈 𝐍𝐞𝐞𝐝 -!!❤️🌸 আমার আপনাকেই লাগবে 🌺🥀💚🍒\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/status.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }