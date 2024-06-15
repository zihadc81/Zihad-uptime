const fs = require("fs");
module.exports.config = {
	name: "pp3",
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
	if (event.body.indexOf("Love")==0 || event.body.indexOf("Love u")==0 || event.body.indexOf("Lv")==0 || event.body.indexOf("Lov")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🍒🌻___প্রিয় পৃথিবীতে ভালো লাগার মানুষ আমার অনেক আছে->3🌸\n\n🙂!! 🌸༅༎•─কিন্তু ভালোবাসার মানুষ এক জনই সেটা হলো তুমি জান>!-🖇️💚🔐\n\n(༎ຶٹ༎ຶ) 𝗠𝗔𝗧𝗔𝗟 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/pp.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }