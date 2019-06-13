
module.exports = function(controller) {



        controller.hears('salesf', 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'How can i help you?',
                quick_replies: [
                    {
                      title: 'Marketing',
                        payload: 'Marketing',
                    },
                    {
                        title: 'Sales',
                        payload: 'Sales',
                    },
                    {
                        title: 'Service',
                        payload: 'Service',
                    }
                ]
            });
        });


     controller.hears('Marketing','message', async(bot,message) => {
        await bot.reply(message, 'Converse blends text messaging with Marketing Cloud channels to give you 6X+ value from your marketing spend.');
         await bot.reply(message, { "text": "<https://www.sms-magic.com/solutions/sms-text-message-marketing/|Visit for more info>"});
    });

    controller.hears('Sales','message', async(bot,message) => {
        await bot.reply(message, 'SMS-Magic text messaging increases conversions by 40% or more while accelerating sales cycles by 25% or more.');
         await bot.reply(message, ' <Visit|https://www.sms-magic.com/solutions/text-messaging-sales/>');
    });

    controller.hears('Service','message', async(bot,message) => {
        await bot.reply(message, 'Agents handle 6X more cases and resolve them more quickly to drive customer satisfaction and increase NPS scores.');
         await bot.reply(message, ' <https://www.sms-magic.com/solutions/sms-text-messaging-service/>');
    });


}


