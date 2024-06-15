const fs = require("fs");
module.exports.config = {
	name: "lavlyxxx",
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
	if (event.body.indexOf("lavly")==0 || event.body.indexOf("V")==0 || event.body.indexOf("☺️")==0 || event.body.indexOf("😊")==0) {
		var msg = {
				body: "🙂🌺💚︵✨🖤\n\n>🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 🖤🦋🌸\n\n❤️༎_____Ｉ ωιѕ𝐇﹏🙂💔\n\n─༅༎•🌺 লাইফে এমন একজন আসুক >🐰🦋🌸\n\n 🖇️💚🔐যে কখনো আমার উপর বিরক্ত হবে না”༎…!🖤🌸\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/lavly.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }