const fs = require("fs");
module.exports.config = {
	name: "nesha12",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "nesha12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nesha")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf(" 😌")==0 || event.body.indexOf("Maya")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🦋⊱|| পৃথিবীর সবচেয়ে ভয়ংকর রোগের নাম হচ্ছে মায়া ༅༎ >3💚🔐\n\n🦋⊱|| যেটা মানুষকে মৃত্যুর আগেই জীবিত লাশ বানিয়ে দেয় ༅༎ >3🌸🙂\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/nesha.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }