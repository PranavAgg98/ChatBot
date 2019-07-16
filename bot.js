
var request = require('request');
// Import Botkit's core features
const { Botkit } = require('botkit');
const { BotkitCMSHelper } = require('botkit-plugin-cms');

// Import a platform-specific adapter for web.

const { WebAdapter } = require('botbuilder-adapter-web');

const { MongoDbStorage } = require('botbuilder-storage-mongodb');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//const adapter = new WebAdapter();
// Load process.env values from .env file
require('dotenv').config();

process.env.uri='http://brick-damselfly.glitch.me'
process.env.cms_token='youwillneverguessmysecretbottoken'

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/mydb';
// Use connect method to connect to the Server
MongoClient.connect(url,{useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



let storage = null;
if (process.env.MONGO_URI) {
    storage = mongoStorage = new MongoDbStorage({
        url : process.env.MONGO_URI,
    });
}


const adapter = new WebAdapter({});


const controller = new Botkit({
    debug: true,
    webhook_uri: '/api/messages',

    adapter: adapter,

    storage
});

if (process.env.uri) {
    controller.usePlugin(new BotkitCMSHelper({
        uri: process.env.uri,
        token: process.env.cms_token,
    }));
}

// Once the bot has booted up its internal services, you can use them to do stuff.
controller.ready(() => {

    // load traditional developer-created local custom feature modules
    controller.loadModules(__dirname + '/features');

    /* catch-all that uses the CMS to trigger dialogs */
    if (controller.plugins.cms) {
        controller.on('message,direct_message', async (bot, message) => {
            let results = false;
            results = await controller.plugins.cms.testTrigger(bot, message);

            if (results !== false) {
                // do not continue middleware!
                return false;
            }
        });
    }

});




controller.middleware.ingest.use(function(bot, message, next) {
    if (message.incoming_message.text != null)
    {
    MongoClient.connect(url,{useNewUrlParser: true },function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("pipe").insertOne(message.incoming_message, function(err, res) {
            if (err) throw err;
            console.log("1 message recieved");
            db.close();
            });
        });
    message.logged = true;
    }
    next();
});



controller.middleware.send.use(function(bot, message, next) {

    // log it
     MongoClient.connect(url,{useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
   dbo.collection("pipe").insertOne(message, function(err, res) {
    if (err) throw err;
    console.log("1 message sent");
    db.close();
  });
});

    if(fetch('http://localhost:5002/recieve', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
  }))
  {console.log("Data Sent");}
  else
  {
  console.log("Data not sent");}
    // modify the message
    message.logged = true;

    // continue processing the message
    next();

});

