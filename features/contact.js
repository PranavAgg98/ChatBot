


module.exports = function(controller) {



        controller.hears('contact', 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'How can i help you?',
                quick_replies: [
                    {
                      title: 'Location',
                        payload: 'location',
                    },
                    {
                        title: 'Business',
                        payload: 'business',
                    },
                    {
                        title: 'Customer Support',
                        payload: 'customer',
                    },
                    {
                        title: 'Career/HR dept',
                        payload: 'career',
                    }
                ]
            });
        });


    }
