module.exports = function(controller) {

    controller.hears('location','message', async(bot,message) => {
        await bot.reply(message, 'Global/USA Headquarters <br>Screen-Magic Mobile Media Inc. <br>2831 St. Rose Parkway, Suite 200, Henderson, NV 89052');
         await bot.reply(message, 'EMEA/APAC HeadQuarters <br>Screen-Magic Mobile Media Pvt. Ltd.<br>Office No-201&204, Pride House, Near University Circle, Shivaji Nagar,<br>Pune – 411016');
    });

     controller.hears('career','message', async(bot,message) => {
        await bot.reply(message, 'Send email:  talent@sms-magic.com.');
         await bot.reply(message, ' Call us <br>1-727-601-9463');
    });

    controller.hears('customer','message', async(bot,message) => {
        await bot.reply(message, 'Send email: sales@sms-magic.com.');
         await bot.reply(message, ' Call us <br>US: 1-888-568-1315 | UK: 0-808-189-1305 | AUS: 1-800-823-175');
    });

    controller.hears('business','message', async(bot,message) => {
        await bot.reply(message, 'Send email:   care@sms-magic.com.');
         await bot.reply(message, ' Call us <br>US: 1-888-568-1315 | UK: 0-808-189-1305 | AUS: 1-800-823-175');
    });


}