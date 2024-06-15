const fs = require("fs");
module.exports.config = {
	name: "ineed",
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
	if (event.body.indexOf("Need")==0 || event.body.indexOf("need")==0 || event.body.indexOf("I need")==0 || event.body.indexOf("Girl")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🍒🌻___ডিয়ার ᶠᵃᶜᵉᵇᵒᵒᵏ বাসি আমি কিন্তু ফরমালিন মুক্ত সিঙ্গেল আছি চাইলে পটায় নিতে পারো কিছু মনে করবো নাহ্..!!🤭🐸🥴\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/need.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }