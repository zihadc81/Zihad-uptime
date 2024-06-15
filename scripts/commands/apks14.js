const fs = require("fs");
module.exports.config = {
	name: "sumaiya12",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sumaiya12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😇")==0 || event.body.indexOf("🫠")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🙂")==0) {
		var msg = {
				body: "___💜🔐🌈___ \n\n༎____𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲Ｉ ωιѕ𝐇﹏༎ຶ \n\n🐰!<'— পূর্ণতা পাক পৃথিবীর সকল ভালোবাসা সুন্দর হোক সম্পর্কের শেষটা -!!-)🖤🌻 \n\n___🍒🖇️✨___\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/sumaiya.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }