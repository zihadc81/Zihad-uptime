const fs = require("fs");
module.exports.config = {
	name: "att009",
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
	if (event.body.indexOf("A")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("👿")==0 || event.body.indexOf("😎")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🍒🌻___৩০ মিনিটের নাটক টেনে টেনে༒তিন মিনিটে শেষ করি༒︎আর তুই কি ভাব সস ༒︎তোর 𝐀𝐭𝐓𝐢𝐓𝐢𝐮𝐃 দেখবো আমি 🌸༅༎•─\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/att.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }