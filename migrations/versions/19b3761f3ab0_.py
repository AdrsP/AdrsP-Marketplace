"""empty message

Revision ID: 19b3761f3ab0
Revises: 0c642e235396
Create Date: 2024-03-12 02:16:00.093411

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19b3761f3ab0'
down_revision = '0c642e235396'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('owner', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'user', ['owner'], ['id'])

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(length=30), nullable=False))
        batch_op.add_column(sa.Column('password_hash', sa.String(length=60), nullable=False))
        batch_op.add_column(sa.Column('budget', sa.Float(), nullable=False))
        batch_op.create_unique_constraint(None, ['username'])
        batch_op.drop_column('password')
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('budget')
        batch_op.drop_column('password_hash')
        batch_op.drop_column('username')

    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('owner')

    # ### end Alembic commands ###
