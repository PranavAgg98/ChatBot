
module.exports = function(controller) {



        controller.hears(new RegExp('test'), 'message', async (bot, message) => {

bot.api.chat.postMessage({
   text: 'This is my sample message <http://google.com|google>',
    });

});
}