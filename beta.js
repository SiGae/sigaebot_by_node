process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api');
const token = '336580645:AAFaWnA_XVuyoAH6oJeP5d_r81r66IQft5o';

const bot = new TelegramBot(token, {polling: true});

var antiMonday = false;
var fuckPnamu = false;
var ct = 0;
var si = -1;
var bun = -1;
var hcnt = 0; 

function removeNone(text) {
    if (text == null)
        return "";
    else
        return text;
}


bot.on('message',(msg) => {
    console.log(msg);
});

bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, "bot status is normal");
});

bot.on('message', (msg) => {

    console.log(msg);
    console.log("\n\n");

    try {
        if (msg.text.indexOf("자야지") != -1 && msg.from.id == 222521602) {
            hcnt += 1;
            bot.sendMessage(msg.chat.id, hcnt)
        }

        if (msg.text.indexOf("확률은?") != -1) {
            var ran = Math.floor(Math.random() * 100);
            bot.sendMessage(msg.chat.id,  ran + "퍼센트");
        }

        if (msg.text.indexOf("마법의 소라고동") != -1) {

            var sora = ["ㅇㅇ", "ㄴㄴ"];
            var out = Math.floor(Math.random() * 2);

            bot.sendMessage(msg.chat.id, sora[out]);
        }

        if (msg.text.indexOf("죽인다") != -1){
            var fs = require("fs");

            
        }


    } catch(err){
        console.log(err.message)
    }
  });