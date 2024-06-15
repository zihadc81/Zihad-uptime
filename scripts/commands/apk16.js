const fs = require("fs");
module.exports.config = {
	name: "krisno",
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
	if (event.body.indexOf("Krisno")==0 || event.body.indexOf("krisna")==0 || event.body.indexOf("Dhormo")==0 || event.body.indexOf("Vogoban")==0) {
		var msg = {
				body: "💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n(༎ຶٹ༎ຶ) জীবনে লক্ষ্য স্থির রাখা আবশ্যক, কারণ লক্ষ্য হীন জীবন মানুষ কে ভুল পথে চালিত করে (༎ຶٹ༎ຶ)\n\n(༎ຶٹ༎ຶ) 𝗠𝗔𝗧𝗔𝗟 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/krisno.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }