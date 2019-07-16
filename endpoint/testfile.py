from flask import Flask,render_template,request
import requests
app=Flask(__name__)
msg=''
def get_id():
    id = int(max(dict.keys())) + 1
    id = '%i' % id
    return id

mat=[]

@app.route('/',methods=['GET','POST'])
def index():
    return render_template('page1.html')

@app.route('/send',methods=['POST'])
def send():
    res=request.form
    msg = res['ms']

    print msg
    return msg

@app.route('/recieve',methods=['GET','POST'])
def recieve():
    dta=request.get_json()
    print dta
    mat.append(dta)
    return render_template('recieve.html',data=mat)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)