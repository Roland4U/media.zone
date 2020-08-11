# Generated by Django 3.0.4 on 2020-08-11 17:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0011_movie_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Serial',
            fields=[
                ('movie_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='movies.Movie')),
            ],
            bases=('movies.movie',),
        ),
    ]
