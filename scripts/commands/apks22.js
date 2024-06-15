const fs = require("fs");
module.exports.config = {
	name: "priyo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "priyo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥰")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😊")==0 || event.body.indexOf("😍")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝐈 𝐖𝐢𝐬𝐡__🤍✨\n\n🥰🥀💚 আমার লাইফ এ এমন একজন মানুষ আসুক যে আমাকে আমার মত করে বুঝবে ->3🌸🙂 \n\n🍁🍂 // _______(°^°)_________ // 🥀💚🥰\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/baby.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }