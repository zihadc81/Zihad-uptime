const fs = require("fs");
module.exports.config = {
	name: "apks28",
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
	if (event.body.indexOf(" Biri de")==0 || event.body.indexOf("Biri")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("biri de")==0) {
		var msg = {
				body: "°-۵༎💚🌸\n\n💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n❥︎シ° 𝐿𝑖𝑓𝑒 এ এমন কিছু মুহূর্ত আসে নিরব হয়ে থাকা ছাড়া আর কিছু করার থাকে না •༎•🥀🙂💔\n\n🥀༊ !ლ🌼\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/biri.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                           }