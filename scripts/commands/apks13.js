const fs = require("fs");
module.exports.config = {
	name: "ekaxx",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ekaxx",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("eka")==0 || event.body.indexOf("keu nai")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("Eka")==0) {
		var msg = {
				body: "🙂🌺💚︵✨🖤\n\n💚𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!ᵉ-🌺💚 \n\n︵🌸🥀●───༊এই ব্যস্ত শহরটা যেমন আছে তেমনি থাকবে ༊💛༎ຶ \n\n︵❝།།💚🌺ღ᭄ শুধু বদলে যাবে কিছু গল্প আর স্মৃতি.😐༎ ︵❝།།💚🌺ღ᭄\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/eka.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }