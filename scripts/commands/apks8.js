const fs = require("fs");
module.exports.config = {
	name: "apks9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "off09",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😭")==0 || event.body.indexOf("kosto")==0 || event.body.indexOf("😫")==0 || event.body.indexOf("😩")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n🌺༺-'💙প্রিয়💙-'༺  \n\n🖤আমার`_তো_নির্দিষ্ট_কোনো দুঃখ ছিলো না••!💜ツ🙂🙂❣️ \n\n💙༺সব,,গুলো``_আপন_মানুষদের`_দেওয়া উপহার``_..!!😔💔\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/off.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }