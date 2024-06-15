const fs = require("fs");
module.exports.config = {
	name: "apks25",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "apks25",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💓")==0 || event.body.indexOf("💚")==0 || event.body.indexOf("💜")==0 || event.body.indexOf("💙")==0) {
		var msg = {
				body: "❥______💜🌻☔______// 💚💚\n\n✿┼─🐼⛈️🖇️𝗧𝗵𝗶𝘀 𝗔𝗯𝗼𝘂𝘁 𝗟𝗶𝗻𝗲-ᵉ💜🌻🔐\n\n😌❤️___❝ একটা মেয়ের ছলনার চেয়েও বেসি ভয়ংকর ༎༅༊🌻💚\n\n🥰🥀 __একটা ছেলের মস্তিষ্কে জম্ম নেওয়া ঘ্রিনা 🌺🍂\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
	 		attachment: fs.createReadStream(__dirname + `/noprefix/pem.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }