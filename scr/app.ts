const { Telegraf } = require ('Telegraf')
const bot = new Telegraf("6725226089:AAE_p3oh9YG3aedoaaP6l3lUDqpYHkCm_wQ")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hello !!!!!!!'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))