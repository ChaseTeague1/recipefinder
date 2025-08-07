from flask import request, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Recipe

class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            if user:
                return make_response(user.to_dict(), 200)
        return {}, 401

api.add_resource(CheckSession, '/check_session')

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        return make_response(users, 200)

api.add_resource(Users, '/users')

class Recipes(Resource):
    def get(self):
        recipes = [recipe.to_dict() for recipe in Recipe.query.all()]

        return make_response(recipes, 200)
    
api.add_resource(Recipes, '/recipes')


if __name__ == '__main__':
    app.run(port=5555, debug=True)