from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime

from config import db


class Recipe(db.Model, SerializerMixin):
    __tablename__ = "recipes"

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    image = db.Column(db.String)



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String, nullable=False)
    