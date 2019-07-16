# ChatBot POC
ChatBot made using Botkit embedded on a Flask app using Iframe widget.

### Botkit Setup
npm is used to run the botkit server 

~~~
npm start
~~~

ngrok is used to tunnel from a public endpoint to localhost.
~~~
./ngrok http 3000
~~~
In  /templates/bot.html the url has to be replaced by ngrok url generated

### Flask app Setup

The flask server is run:
~~~
FLASK_APP=main.py flask run
~~~
the app can be accessed on port 5000 of localhost
