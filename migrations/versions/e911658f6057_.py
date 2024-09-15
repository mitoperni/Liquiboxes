"""empty message

Revision ID: e911658f6057
Revises: a6a12f7a0cc4
Create Date: 2024-09-15 10:51:46.586672

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e911658f6057'
down_revision = 'a6a12f7a0cc4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('notifications', 'for_admins')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('notifications', sa.Column('for_admins', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
