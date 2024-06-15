const fs = require("fs");
module.exports.config = {
	name: "apks27",
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
	if (event.body.indexOf("🥵")==0 || event.body.indexOf("hot")==0 || event.body.indexOf("12 vatari")==0 || event.body.indexOf("sexy")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!ᵉ-🌺💚 \n\n︵🌸🥀 খুজঁতে হলে ভালো মনের মানুষ খুজো༎ 🥰🥳 \n\n┈সব কিছু 𝑃𝐸𝑅𝐹𝐴𝐶𝑇 খুজঁতে খুজঁতে বারো ভাতারি হয়ে যেওনা প্রিয়...🌸🥀😆\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/nu.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }