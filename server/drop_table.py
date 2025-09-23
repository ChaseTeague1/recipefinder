from config import db, app  # make sure 'app' is your Flask instance
from sqlalchemy import text

with app.app_context():
    with db.engine.connect() as conn:
        conn.execute(text("DROP TABLE IF EXISTS _alembic_tmp_recipes;"))
        conn.commit()

print("Table dropped successfully.")