const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "goibot",
  prefix: false,
  category: "noprifix",
  usages: "noprifix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["\n=== [ আমাকে 'Bot' বলে ডাকো ] ====\n\n━━━━━━━━━━━━━━━━━━\n\n[ ▶️]➜ 𝗠𝗬 𝗕𝗢𝗦𝗦:𝗭𝗜𝗛𝗔𝗗 𝗜𝗦𝗟𝗔𝗠\n\n[ ▶️]➜ 𝗜𝗕: m.me/100067540204855\n\n[ ▶️]➜ 𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/profile.php?id=100067540204855\n\n━━━━━━━━━━━━━━━━━━"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  : ) 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("assalamu alikum🖤🥀", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "jihad") || (event.body.toLowerCase() == "জিহাদ ভাই") || (event.body.toLowerCase() == "জিহাদ") || (event.body.toLowerCase() == "বট")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐙𝐈𝐇𝐀𝐃 𝐊𝐇𝐀𝐍(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐓𝐎𝐌.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/100067540204855\nতার সাতে যোগা যোগ করবেন WhatsApp :- +8801998679205", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:𝐙𝐈𝐇𝐀𝐃 𝐊𝐇𝐀𝐍 ❤️/n হাই আমি মেছেন্জার ROBOT  আামার বস 𝐙𝐈𝐇𝐀𝐃 আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "adbmin") || (event.body.toLowerCase() == "bolr admin")) {
     return api.sendMessage("He is 𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 ❤️/n তাকে সবাই 𝐓𝐎𝐌(✷‿✷)নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "dhur") || (event.body.toLowerCase() == "baler robot") || (event.body.toLowerCase() == "kpl") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "sumaiya") || (event.body.toLowerCase() == "taniya")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস জিহাদ এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️সব কিছুর জবাব দেওয়া যায়😊 ,কিন্তু হুম এর জবাব কিভাবে দিবো 😅💔", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "tumar nam ki")) {
     return api.sendMessage("️MY NAME IS °_>👅-✘ robot🤖 : ) 🎀 🍒", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "বট এর বাচ্চা বট")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "ss dew")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nani re xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইকে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kemon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হুম আমার বস ZIHAD ও তেমাকে ভালোবাসে🥰🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tmi khaiso") || (event.body.toLowerCase() == "kheyeso")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami zihad") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যাঁ জিহাদ কলিজা ভালো আছো?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Jannat") == 0 || (event.body.indexOf("jannat") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
