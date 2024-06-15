const fs = require("fs");
module.exports.config = {
	name: "apks5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mood09",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😅")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("mood")==0 || event.body.indexOf("mod")==0) {
		var msg = {
				body: "💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n_💥🏡𝐎𝐧𝐞 𝐝𝐚𝐲 𝐢 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐥𝐨𝐬𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐤𝐧𝐨𝐰𝐢𝐧𝐠...!'😥😅 \n\n___💥🦋হটাৎ কোন একদিন অজান্তে অন্ধকার এ হারিয়ে যাবো....!'🙃🥀\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/mood.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }