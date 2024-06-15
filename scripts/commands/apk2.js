const fs = require("fs");
module.exports.config = {
	name: "wish3",
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
	if (event.body.indexOf("💘")==0 || event.body.indexOf("💙")==0 || event.body.indexOf("❤️‍🩹")==0 || event.body.indexOf(" ❤️")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\nღ’♥ আঁকড়ে ধরার জন্য রুপ সৌন্দর্যের প্রয়োজন পরে না->3🌸🙂\n\n>🐰🦋 পাশাপাশি চলার মতো বিশ্বস্ত একটা মানুষই যথেষ্ট>!-🖇️💚🔐\n\n(༎ຶٹ༎ຶ) 𝗠𝗔𝗧𝗔𝗟 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/wish.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }