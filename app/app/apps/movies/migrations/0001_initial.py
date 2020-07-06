# Generated by Django 3.0.4 on 2020-07-03 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Имя')),
            ],
            options={
                'verbose_name': 'Актер',
                'verbose_name_plural': 'Актеры',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Категория')),
                ('description', models.TextField(verbose_name='Описание')),
                ('url', models.SlugField(max_length=160, unique=True)),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
            },
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Жанр')),
                ('description', models.TextField(verbose_name='Описание')),
                ('url', models.SlugField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Жанр',
                'verbose_name_plural': 'Жанры',
            },
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Название')),
                ('quality', models.CharField(max_length=60, null=True, verbose_name='Качество')),
                ('translate', models.CharField(max_length=60, null=True, verbose_name='Перевод')),
                ('duration', models.CharField(max_length=60, null=True, verbose_name='Продолжительность')),
                ('description', models.TextField(verbose_name='Описание')),
                ('poster', models.URLField(verbose_name='Постер')),
                ('year', models.PositiveSmallIntegerField(default=2020, verbose_name='Дата выхода')),
                ('country', models.CharField(max_length=50, verbose_name='Страна')),
                ('budget', models.PositiveIntegerField(default=0, help_text='указать сумму в долларах', verbose_name='Бюджет')),
                ('kinopoisk', models.CharField(max_length=30, null=True, verbose_name='Кинопоиск')),
                ('amdb', models.CharField(max_length=30, null=True, verbose_name='AMDB')),
                ('url', models.SlugField(max_length=200, unique=True)),
                ('data_url', models.URLField(null=True, verbose_name='Адрес для данных')),
                ('draft', models.BooleanField(default=False, verbose_name='Черновик')),
                ('actors', models.ManyToManyField(related_name='actors', to='movies.Actor', verbose_name='Актеры')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Category')),
                ('directors', models.ManyToManyField(related_name='directors', to='movies.Actor', verbose_name='Режисер(ы)')),
                ('genres', models.ManyToManyField(to='movies.Genre', verbose_name='Жанры')),
            ],
            options={
                'verbose_name': 'Фильм',
                'verbose_name_plural': 'Фильмы',
            },
        ),
        migrations.CreateModel(
            name='RatingStar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.SmallIntegerField(default=0, verbose_name='Значение')),
            ],
            options={
                'verbose_name': 'Звезда Рейтинга',
                'verbose_name_plural': 'Звезды Рейтинга',
            },
        ),
        migrations.CreateModel(
            name='Serial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Название')),
                ('quality', models.CharField(max_length=50, verbose_name='Качество')),
                ('translate', models.CharField(max_length=60, verbose_name='Перевод')),
                ('duration', models.CharField(max_length=60, verbose_name='Продолжительность')),
                ('description', models.TextField(verbose_name='Описание')),
                ('poster', models.URLField(verbose_name='Постер')),
                ('year', models.PositiveSmallIntegerField(default=2020, verbose_name='Дата выхода')),
                ('country', models.CharField(max_length=50, verbose_name='Страна')),
                ('budget', models.PositiveIntegerField(default=0, help_text='указать сумму в долларах', verbose_name='Бюджет')),
                ('kinopoisk', models.FloatField(verbose_name='Кинопоиск')),
                ('amdb', models.FloatField(verbose_name='AMDB')),
                ('url', models.SlugField(max_length=200, unique=True)),
                ('data_url', models.URLField(verbose_name='Адрес для данных')),
                ('draft', models.BooleanField(default=False, verbose_name='Черновик')),
                ('actors', models.ManyToManyField(related_name='serial_actors', to='movies.Actor', verbose_name='Актеры')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Category')),
                ('directors', models.ManyToManyField(related_name='serial_director', to='movies.Actor', verbose_name='Режисер(ы)')),
                ('genres', models.ManyToManyField(to='movies.Genre', verbose_name='Жанры')),
            ],
            options={
                'verbose_name': 'Сериял',
                'verbose_name_plural': 'Сериялы',
            },
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('name', models.CharField(max_length=100, verbose_name='Имя')),
                ('text', models.TextField(max_length=5000, verbose_name='Сообшение')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Movie', verbose_name='фильм')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='movies.Reviews', verbose_name='Родитель')),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
            },
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(max_length=15, verbose_name='IP адрес')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Movie', verbose_name='фильм')),
                ('star', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.RatingStar', verbose_name='звезда')),
            ],
            options={
                'verbose_name': 'Рейтинг',
                'verbose_name_plural': 'Рейтинги',
            },
        ),
        migrations.CreateModel(
            name='MovieShots',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Загаловок')),
                ('description', models.TextField(verbose_name='Описание')),
                ('image', models.URLField(verbose_name='Изображение')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Movie', verbose_name='Фильм')),
            ],
            options={
                'verbose_name': 'Кадр из фильма',
                'verbose_name_plural': 'Кадры из фильма',
            },
        ),
    ]
