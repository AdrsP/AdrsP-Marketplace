from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username =db.Column(db.String(30), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(60), unique=False, nullable=False) #for security we will use an encripted password
    budget = db.Column(db.Float, nullable=False, default=1000) #default just gives an default value to the variable/column
    items = db.relationship('Item', backref='owned_user', lazy=True) 
    """the property backref: owned_user allows an "external column that shows which 
    user owns the product, and the lazy will allow to load all the elements at the
    same time"""
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "budget": self.email,
            # do not serialize the password, its a security breach
        }

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False, unique=True)
    bardcode = db.Column(db.String(12), nullable=False, unique=True)
    price = db.Column(db.Float(40), nullable=False, unique=False)
    description = db.Column(db.String(1024), nullable=False, unique=True)
    owner = db.Column(db.Integer(), db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Item {self.name}>'

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "barcode": self.bardcode,
            "price": self.price,
            "description": self.description,
            "owner": self.owner,
        }