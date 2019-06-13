


module.exports = function(controller) {
        controller.hears(new RegExp(/^hi$/i), 'message', async (bot, message) => {
            await bot.reply(message,'Hi');
            await bot.reply(message,'Welcome to Screen-Magic');
            await bot.reply(message,{
                text: 'How can i help you?',
                quick_replies: [
                   {
                        title: 'Solutions',
                        payload: 'solution',
                    },
                    {
                        title: 'Contact',
                        payload: 'contact',
                    }
                ]
            });
        });
    }