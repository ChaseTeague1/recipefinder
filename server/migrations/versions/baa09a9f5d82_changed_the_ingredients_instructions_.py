"""changed the ingredients/instructions model to JSON

Revision ID: baa09a9f5d82
Revises: 283170545141
Create Date: 2025-09-25 09:46:10.369692
"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'baa09a9f5d82'
down_revision = '283170545141'
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('recipes', schema=None) as batch_op:
        batch_op.alter_column(
            'ingredients',
            existing_type=sa.VARCHAR(),
            type_=sa.JSON(),
            existing_nullable=False
        )
        batch_op.alter_column(
            'instructions',
            existing_type=sa.VARCHAR(),
            type_=sa.JSON(),
            existing_nullable=False
        )


def downgrade():
    with op.batch_alter_table('recipes', schema=None) as batch_op:
        batch_op.alter_column(
            'instructions',
            existing_type=sa.JSON(),
            type_=sa.VARCHAR(),
            existing_nullable=False
        )
        batch_op.alter_column(
            'ingredients',
            existing_type=sa.JSON(),
            type_=sa.VARCHAR(),
            existing_nullable=False
        )
