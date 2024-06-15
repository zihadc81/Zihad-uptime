const fs = require("fs");
module.exports.config = {
	name: "valo11",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "apks11",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cawa")==0 || event.body.indexOf("Priyo")==0 || event.body.indexOf("🥰")==0 || event.body.indexOf("pawa")==0) {
		var msg = {
				body: "︵❝།།💚🌺ღ᭄︵ ___-❝།།💚🌺ღ᭄__- \n\n>🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 🖤🦋🌸\n\n🥀----- 🖤চাওয়ার অধিকার সবার আছে✨༊💛༎ຶ \n\n︵❝།།💚🌺ღ᭄কিন্তু পাওয়ার ভাগ্যটা །།💚🌺ღ᭄︵ \n\n✨༊💛༎ຶসবার থাকে না✨༊💛༎ຶ🥰😊\n\n🌼💫🥀>!-🖇️💚🔐\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/valo.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }