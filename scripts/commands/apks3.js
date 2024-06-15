const fs = require("fs");
module.exports.config = {
	name: "apks3",
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
	if (event.body.indexOf("I'd password")==0 || event.body.indexOf("I'd hack")==0 || event.body.indexOf("password")==0 || event.body.indexOf("hack I'd")==0) {
		var msg = {
				body: "(༎ຶٹ༎ຶ)আইডি পাসওয়ার্ড দিয়ে দে বলছি নাহলে তোর আইডির হুগা মাইয়া দিমু কইলাম >🐰🦋🌸\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/id.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }