var request = require('request');
var nm = ''
var ph = ''

const { BotkitConversation } = require('botkit');


module.exports = function(controller) {
const convo = new BotkitConversation('appoint', controller);
convo.say('Give us your details and we will you contact shortly');

convo.ask('Enter Name', async(response, convo, bot) => {
    console.log(`user name is ${ response }`);
    nm=response;
}, 'name');

convo.addAction('ph_number');

convo.addMessage('Ok {{vars.name}}!', 'ph_number');
convo.addQuestion('Now, Enter your phone number', async(response, convo, bot) => {
    console.log(`user number is ${ response }`);
    ph=response;
},'number', 'ph_number');



convo.addAction('confirmation' ,'ph_number');

convo.addQuestion('Your name is {{vars.name}} and your number is {{vars.number}}. Is that right?', [
    {
        pattern: 'no',
        handler: async(response, convo, bot) => {
            await convo.gotoThread('ph_number');
        }
    },
    {
        default: true,
        handler: async(response, convo, bot) => {
         console.log(nm + " " +ph)
         request('http://localhost:5001/appoint/'+nm+'/'+ph+'',async function (err, res, body) {
         console.log('statusCode: ', res && res.statusCode); // Check 200 or such
        //    console.log('This is the info', body);

         });
         }
        }

], 'confirm', 'confirmation');

convo.addMessage('Thank you','confirmation')

controller.addDialog(convo);

controller.hears('appoint','message', async (bot, message) => {
	await bot.beginDialog('appoint').catch(function(err) {
                console.log('error: ', err);
                });

});
}