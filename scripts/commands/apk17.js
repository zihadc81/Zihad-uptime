const fs = require("fs");
module.exports.config = {
	name: "flatg",
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
	if (event.body.indexOf("G")==0 || event.body.indexOf("🫅")==0 || event.body.indexOf("🐸")==0 || event.body.indexOf("🐵")==0) {
		var msg = {
				body: "🙂🌺💚︵✨🖤>!-🖇️💚🔐\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n(༎ຶٹ༎ຶ) বেশি ভাব নিলে এমন তাবিজ করমু 😌বাড়ির সামনে চকলেট নিয়া দাড়ায় থাকবা..!!🤭🐸🥴\n\n(༎ຶٹ༎ຶ) 𝗠𝗔𝗧𝗔𝗟 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/flat.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }