const {addCommand} = require('../events')
const {Fancy} = require('raganork-bot')
const {WORKTYPE} = require('../config');
addCommand({pattern: 'fancy ?(.*)', fromMe: true, desc: 'Creates fancy text fonts'}, (async (message, match) => {
if (!match[1]||!message.reply_message.message) return await message.sendReply("Reply to any message with .fancy number\n"+Fancy("example","32"))
try { var result = Fancy(message.reply_message.message,match[1]) } catch (e) {return await message.sendReply(e.message)}
await message.reply(result)
     }))
