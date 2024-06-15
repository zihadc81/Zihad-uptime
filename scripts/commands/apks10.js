const fs = require("fs");
module.exports.config = {
	name: "apks11",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sad",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("love")==0 || event.body.indexOf("I love you")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("broken")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n->🐰🍒🍭– 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗮𝘀 𝗮𝗻 𝗮𝗱𝗱𝗶𝗰𝘁𝗶𝗼𝗻,💜🌺 -- 𝗮𝗻𝗱 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗺𝘆 𝗮𝗱𝗱𝗶𝗰𝘁𝗶𝗼𝗻-?🖇️✨ \n\n_প্রত্যেকের'ই একটি নেশা আছে,🤍🦋💫 আর আমার সেই নেশাটা'ই আপনি.!🔐😇🖤\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }