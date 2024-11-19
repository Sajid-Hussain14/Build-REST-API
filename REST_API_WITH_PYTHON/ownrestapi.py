# from flask import Flask

# app = Flask(__name__)

# from flask_sqlalchemy import SQLAlchemy
# #refer to flask documentation
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///drinks.db'
# db = SQLAlchemy(app)
# class Drink(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     description = db.Column(db.String(255))

#     def __repr__(self):
#         return f"{self.name} - {self.description}>"

# @app.route('/')
# def index():
#     return "<h1>hello world</h1>"

# #making a get request
# @app.route('/drinks')
# def get_drinks():

#     return {"drinks": "water"} 

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///drinks.db'
db = SQLAlchemy(app)

class Drink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(255))

    def __repr__(self):
        return f"{self.name} - {self.description}"

# Wrap the db.create_all() inside an app context
with app.app_context():
    db.create_all()  # Creates the database and tables

@app.route('/')
def index():
    return "<h1>hello world</h1>"

@app.route('/drinks')
def get_drinks():
    drinks = Drink.query.all()
    outptut = []
    for drink in drinks:
        drink_data = {
            "name": drink.name,
            "description": drink.description
        }
        outptut.append(drink_data)
        
    return {"drinks": outptut}
@app.route('/drinks/<id>')
def get_drink(id):
    drink = Drink.query.get_or_404(id)
    return {"name": drink.name, "description": drink.description}

@app.route('/drinks', methods=['POST'])
def add_drink():
    drink  = Drink(name=request.json.get('name'), description=request.json.get('description'))
    db.session.add(drink)
    db.session.commit()
    return {"id": drink.id}
@app.route('/drinks/<id>', methods=['DELETE'])
def delete_drink(id):
    db.session.delete(Drink.query.get_or_404(id))
    db.session.commit()
    return {"result": True}
if __name__ == "__main__":
    app.run(debug=True)
