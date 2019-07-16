from flask import Flask,render_template
import random
from flask_pymongo import PyMongo
app=Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/appointdb"
mongo = PyMongo(app)

def get_id():
    id = int(max(dict.keys()).lstrip('id')) + 1
    id = 'id%i' % id
    return id

@app.route('/',methods=['GET'])
def api():
    n=random.randint(1,100)
    s=str(n)
    return s

@app.route('/appoint/<nm>/<ph>',methods=['GET'])
def appnp(nm,ph):
    dict= {
         'name':nm,
         'phone':ph
            }
    mongo.db.info.insert_one(dict)
    return 'ok'

@app.route('/appoint',methods=['GET'])
def appoint():
    data=list(mongo.db.info.find({},{'name':1 ,'phone':1,'_id':0}))
   # print data
    return render_template('db.html',data=data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
