
    var request = require('request');
    var c='';

module.exports = function(controller) {
    controller.hears('clients', 'message', async (bot, message) => {
        request('http://localhost:5001/',async function (err, res, body) {
            console.log('statusCode: ', res && res.statusCode);
            console.log('This is the count of users: ', body);
            c=body;
            await bot.reply(message, 'There are ' + c +' clients connected');
            }).catch(function(err) {
                console.log('error: ', err);
                });

    });
};

