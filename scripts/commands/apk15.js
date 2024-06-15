const fs = require("fs");
module.exports.config = {
	name: "pyarmm",
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
	if (event.body.indexOf("Fake")==0 || event.body.indexOf("Beiman")==0 || event.body.indexOf("Beimani")==0 || event.body.indexOf("Bissas")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n(༎ຶٹ༎ຶ) নোংরা মনের মানুষ গুলো ভালোবাসার রাজ্যে রাজত্ব করে বেড়ায় (༎ຶٹ༎ຶ)\n\n(༎ຶٹ༎ຶ) আর সত্যিকারের ভালোবাসার মানুষ গুলো অব হেলার ভিড়ে হারিয়ে যায় 💔>‌‌..(༎ຶٹ༎ຶ)\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/pyarmm.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }