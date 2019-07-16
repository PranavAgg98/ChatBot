
module.exports = function(controller) {



         controller.hears('industry', 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Choose ',
                quick_replies: [
                    {
                      title: 'Financial services',
                        payload: 'financ',
                    },
                    {
                        title: 'Higher education',
                        payload: 'education',
                    },
                    {
                        title: 'Contact Centers',
                        payload: 'Centers',
                    }
                ]
            });
        });


     controller.hears('financ','message', async(bot,message) => {
        await bot.reply(message, 'Attract more leads, respond 24 x 7, and automate tedious tasks for a personal touch with Converse text messaging.');
         await bot.reply(message, { "text": "<https://www.sms-magic.com/industries/financial-services/>"});
    });

    controller.hears('education','message', async(bot,message) => {
        await bot.reply(message, 'Engage more students, automate campaigns & enrollment, offer timely personal coaching for student success.');
         await bot.reply(message, ' <https://www.sms-magic.com/industries/education/>');
    });

    controller.hears('Centers','message', async(bot,message) => {
        await bot.reply(message, 'Deliver fast responses, convert more calls thanks to guidance and effectively measure agent performance.');
         await bot.reply(message, '<https://www.sms-magic.com/industries/contact-centers/>');
    });


}


