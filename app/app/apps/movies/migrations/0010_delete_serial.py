# Generated by Django 3.0.4 on 2020-07-27 19:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0009_serial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Serial',
        ),
    ]