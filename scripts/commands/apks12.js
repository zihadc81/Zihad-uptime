const fs = require("fs");
module.exports.config = {
	name: "taka09",
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
	if (event.body.indexOf("🫡")==0 || event.body.indexOf("Taka")==0 || event.body.indexOf("Money")==0 || event.body.indexOf("taka")==0) {
		var msg = {
				body: ">!-🖇️💚🔐\n\n💚𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!ᵉ-🌺💚\n\n︵❝།།💚🌺ღ᭄ টাকা এমন একটা জিনিস মামা টাকা থাকলে তোমারে চিনবে༊💛༎ຶ\n\n༊💛༎ຶ🥰😊 আবার টাকা না থাকলে বন্ধু বলো বা জাই বলো কেউ তোমারে চিনবে না︵❝།།💚🌺ღ᭄༎😅😞 \n\n༊💛༎ຶআবার টাকা থাকলে তুমি সবার কাছে সেরা...🌸🥀\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/taka.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }