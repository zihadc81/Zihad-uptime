const fs = require("fs");
module.exports.config = {
	name: "kos87",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "kos87",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫣")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("😀")==0 || event.body.indexOf("🌼")==0) {
		var msg = {
				body: "💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n🪐🧸!< 𝘿𝙤𝙣'𝙩 𝘽𝙚𝙇𝙡𝙚𝙫𝙀 𝙞𝙉 𝙏𝙚𝙈𝙥𝙤𝙧𝘼𝙧𝙔 𝙏𝙝𝙄𝙣𝙂𝙨<!︵🦋💜\n\n🦋⊱||_সম্পর্কটা কিছুদিনের হলেও🐰🍒\n\n🦋⊱||_তাকে ছাড়া প্রতিটা মুহূর্ত খুব শূন্য লাগে! >)🌧️🖤\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/kos.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }