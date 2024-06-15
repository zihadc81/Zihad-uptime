const fs = require("fs");
module.exports.config = {
	name: "balerbot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "balerbot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😃")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("☺️")==0) {
		var msg = {
				body: "༅༎ 💜💫\n\n︵🐰🌺-!<'𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲__🖇️💜🦋🌈-!!\n\n︵🍒💜🖇️-!!- 𝙔𝙤𝙪 𝘼𝙧𝙚 𝘼𝙣 𝙄𝙣𝙫𝙞𝙨𝙞𝙗𝙡𝙚 𝙁𝙚𝙚𝙡𝙞𝙣𝙜 𝙄𝙣 𝙏𝙝𝙚 𝘾𝙧𝙤𝙬𝙚𝙙 𝙊𝙛 𝙏𝙝𝙤𝙪𝙨𝙖𝙣𝙙𝙨 𝙊𝙛 𝘽𝙚𝙖𝙪𝙩𝙞𝙚𝙨!>🥰🖤\n\n>🦋🌸_হাজারো༉༏ সৌন্দর্যের༉༏ ভিড়ে༉༏ তুমি༉༏ এক༉༏ অদৃশ্য༉༏ অনুভূতি༉༏>!!😊🌺\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗦𝗔𝗡𝗝𝗔𝗬 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/mimi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }