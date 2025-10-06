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


#User related section
class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        return make_response(users, 200)
    
    def post(self):
        data = request.get_json()
        
        new_user = User(
            username = data['username'],
            email = data['email']
        )

        db.session.add(new_user)
        db.session.commit()

        return make_response(new_user.to_dict(), 201)

api.add_resource(Users, '/users')

class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        user = User.query.filter(User.username == username).first()

        session['user_id'] = user.id

        return make_response(user.to_dict(), 200)

api.add_resource(Login, '/login')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204

api.add_resource(Logout, '/logout')


#Recipe section
class Recipes(Resource):
    def get(self):
        recipes = [recipe.to_dict() for recipe in Recipe.query.all()]

        return make_response(recipes, 200)
    
    def post(self):
        data = request.get_json()
        user_id = session.get('user_id')

        new_recipe = Recipe(
            title = data['title'],
            instructions = data['instructions'],
            description = data['description'],
            ingredients = data['ingredients'],
            calories = data['calories'],
            protein = data['protein'],
            carbs = data['carbs'],
            fats = data['fats'],
            time = data['time'],
            image = data['image'],
            user_id = user_id
        )
        db.session.add(new_recipe)
        db.session.commit()

        return make_response(new_recipe.to_dict(), 201)

api.add_resource(Recipes, '/recipes')

class RecipeById(Resource):
    def get(self,id):
        recipe = Recipe.query.filter(Recipe.id == id).first()
        return make_response(recipe.to_dict(), 200)
    
    def delete(self,id):
        recipe = Recipe.query.filter(Recipe.id == id).first()

        if recipe:
            db.session.delete(recipe)
            db.session.commit()
        
        body = {'message':'Recipe deleted'}
        return make_response(body, 204)

api.add_resource(RecipeById, '/recipes/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)