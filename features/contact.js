


module.exports = function(controller) {



        controller.hears('contact', 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Which department would you like to contact?',
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
