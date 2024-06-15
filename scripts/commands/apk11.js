const fs = require("fs");
module.exports.config = {
	name: "llvv009",
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
	if (event.body.indexOf("Anuvuti")==0 || event.body.indexOf("S")==0 || event.body.indexOf("Bektigoto")==0 || event.body.indexOf("Bk")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂\n\n(༎ຶٹ༎ຶ)—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত (༎ຶٹ༎ຶ)\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/llvv.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }