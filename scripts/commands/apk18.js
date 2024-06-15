const fs = require("fs");
module.exports.config = {
	name: "lpxxx",
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
	if (event.body.indexOf("🌹")==0 || event.body.indexOf("🥀")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😿")==0) {
		var msg = {
				body: ">🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 🖤🦋🌸\n\n° -(🍒🦋𝐓𝐢𝐦𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐬”𝐁𝐮𝐭 𝐒𝐨𝐦𝐞❛❛ 💚…\n\n❛❛ 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐍𝐞𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐠𝐞 ‘”✨🦋-!)\n\n.😊:)সময় বদলায় কিন্তু কিছু অনুভূতি বদলায় না!’.’>!✨🌸💙…\n\n(༎ຶٹ༎ຶ) 𝗠𝗔𝗧𝗔𝗟 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/lp.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }