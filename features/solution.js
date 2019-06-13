module.exports = function(controller) {



        controller.hears(new RegExp(/^solution$/i), 'message', async (bot, message) => {
                await bot.reply(message,{
                text: 'What solutions are you looking for?',
                quick_replies: [
                   {
                        title: 'Salesforce Solutions',
                        payload: 'salesf',
                    },
                    {
                        title: 'Industry Solutons',
                        payload: 'industry',
                    }
                ]
            });
        });


    }