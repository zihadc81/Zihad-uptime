const fs = require("fs");
module.exports.config = {
	name: "apks2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hasi098",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😄")==0 || event.body.indexOf("😣")==0 || event.body.indexOf("😨")==0 || event.body.indexOf("😖")==0) {
		var msg = {
				body: "💚🔐!!__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n─༅༎•🥀🌺 ভুল বুঝে  ছেড়ে যাওয়ার নাম হলো অজুহাত আর ভুলগুলো \nমানিয়ে নিয়ে আগলে ধরে রাখার নাম༎ হলো ভালোবাসা \n\n─༅༎•🥀🌺\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/hasi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}