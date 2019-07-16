from flask import Flask,render_template,request, url_for, redirect
user_auth = 'user123'
pass_auth = 'pass123'

curuser = 'user'


app=Flask(__name__)

def setuser(user):
    curuser=user


def getuse():
    return curuser

def auth(user,passw):
    if user == user_auth and passw == pass_auth:
        setuser(user)
        return True
    else:
        return False

@app.route('/')
def index():
    return render_template('login.html')



@app.route('/login',methods=['POST','GET'])
def login():
        username=request.form.get('user')
        passw=request.form.get('password')

        if auth(username,passw):
            return redirect(url_for('bot'))
        else:
            return render_template('login.html')

@app.route('/bot')
def bot():
    username = getuse()
    return render_template('bot.html',username = username)

if __name__ == '__main__':
   app.run(debug = True)
