from models import User, Recipe

from faker import Faker

from app import app
from config import db

if __name__ =='__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        #clear existing data
        db.session.query(Recipe).delete()
        db.session.query(User).delete()

        users = []
        for _ in range(10):
            user = User(
                username=fake.user_name(),
                email=fake.email()
                )
            users.append(user)
            db.session.add(user)

        db.session.commit() 

        recipes= []
        for _ in range(15):
            recipe = Recipe(
                title=fake.sentence(nb_words=3),
                description=fake.paragraph(),
                ingredients=fake.words(nb=fake.random_int(3,7)),
                instructions=[fake.sentence() for _ in range(fake.random_int(2,5))],
                image=fake.image_url(),
                time=fake.random_int(1,100),
                calories=fake.random_int(1, 100),
                protein=fake.random_int(1, 100),
                carbs=fake.random_int(1, 100),
                fats=fake.random_int(1, 100),
            )
            recipes.append(recipe)
            db.session.add(recipe)

        db.session.commit() 

        print("Seeding complete")