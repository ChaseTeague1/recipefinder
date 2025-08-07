from models import User, Recipe

from faker import Faker

from app import app
from config import db

if __name__ =='__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")


        users = []
        for _ in range(10):
            user = User(
                username=fake.user_name())
            users.append(user)
            db.session.add(user)

        db.session.commit() 

        recipes= []
        for _ in range(15):
            recipe = Recipe(
                title=fake.sentence(nb_words=3),
                description=fake.paragraph(),
                ingredients=fake.text(),
                image=fake.image_url()
            )
            recipes.append(recipe)
            db.session.add(recipe)

        db.session.commit() 

        print("Seeding complete")