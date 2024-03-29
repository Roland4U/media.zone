from django.db import models
from datetime import date
from django.contrib.auth.models import User
from django.shortcuts import reverse


class Category(models.Model):
    """Category"""
    name = models.CharField("Категория", max_length=150)
    description = models.TextField("Описание")
    url = models.SlugField(max_length=160, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Actor(models.Model):
    """Model definition for Actor."""
    name = models.CharField("Имя", max_length=150)


    def __str__(self):
        """Unicode representation of Actor."""
        return self.name

    class Meta:
        """Meta definition for Actor."""

        verbose_name = 'Актер'
        verbose_name_plural = 'Актеры'


class Genre(models.Model):
    """Model definition for Genres."""

    name = models.CharField("Жанр", max_length=150)
    description = models.TextField("Описание")
    url = models.SlugField(max_length=200, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"




class Movie(models.Model):
    """Model definition for Movie."""

    title = models.CharField("Название", max_length=200)
    quality = models.CharField("Качество", max_length=60, null=True)
    translate = models.CharField("Перевод", max_length=60, null=True)
    duration = models.CharField("Продолжительность", max_length=60, null=True)
    # tagline = models.CharField("Слоган", max_length=200, default='')
    description = models.TextField("Описание")
    poster = models.URLField("Постер")
    year = models.PositiveSmallIntegerField("Дата выхода",  default=2020)
    country = models.CharField("Страна", max_length=50)
    directors = models.ManyToManyField(
        Actor, verbose_name="Режисер(ы)", related_name="directors"
        )
    actors = models.ManyToManyField(Actor, verbose_name="Актеры", related_name="actors")
    genres = models.ManyToManyField(Genre, verbose_name="Жанры")
    # world_premier = models.DateField("Премьера в мире", default=date.today)
    budget = models.PositiveIntegerField(
        "Бюджет",
         default=0,
         help_text="указать сумму в долларах"
        )

    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    kinopoisk = models.CharField("Кинопоиск", null=True, max_length=30)
    amdb = models.CharField("AMDB", null=True, max_length=30)
    url = models.SlugField(max_length=200, unique=True)
    data_url = models.URLField("Адрес для данных", null=True)
    draft = models.BooleanField("Черновик", default=False)
    hidden = models.ManyToManyField(User, related_name='hide_movie', blank=True)
    like = models.ManyToManyField(User, related_name='like_movie', blank=True)
    dislike = models.ManyToManyField(User, related_name='dislike_movie', blank=True)
    viewed = models.ManyToManyField(User, related_name='viewed_movie', blank=True)

    def get_absolute_url(self):
        return reverse("movie_dec", kwargs={"slug": self.url})
    

    def __str__(self):
        return self.title

    class Meta:
        """Meta definition for Movie."""
        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильмы'


class Serial(Movie):
    """Model definition for Serial."""
    


    class Meta:
        """Meta definition for Serial."""
        verbose_name = 'Сериял'
        verbose_name_plural = 'Сериялы'

class MovieShots(models.Model):
    """Model definition for MovieShots."""

    title = models.CharField("Загаловок", max_length=100)
    description = models.TextField("Описание")
    image = models.URLField("Изображение")
    movie = models.ForeignKey(Movie, verbose_name="Фильм", on_delete=models.CASCADE)

    class Meta:
        """Meta definition for MovieShots."""

        verbose_name = 'Кадр из фильма'
        verbose_name_plural = 'Кадры из фильма'

    def __str__(self):
        """Unicode representation of MovieShots."""
        return self.title


class RatingStar(models.Model):
    """Model definition for RatingStar."""

    value = models.SmallIntegerField("Значение", default=0)


    class Meta:
        """Meta definition for RatingStar."""

        verbose_name = 'Звезда Рейтинга'
        verbose_name_plural = 'Звезды Рейтинга'

    def __str__(self):
        """Unicode representation of RatingStar."""
        return self.value

class Rating(models.Model):
    """Model definition for Rating."""

    ip = models.CharField("IP адрес", max_length=15)
    star = models.ForeignKey(RatingStar, on_delete=models.CASCADE, verbose_name="звезда")
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, verbose_name="фильм")

    class Meta:
        """Meta definition for Rating."""

        verbose_name = 'Рейтинг'
        verbose_name_plural = 'Рейтинги'

    def __str__(self):
        """Unicode representation of Rating."""
        return f"{self.star} - {self.movie}"


class Reviews(models.Model):
    """Model definition for Reviews."""

    email = models.EmailField()
    name = models.CharField("Имя", max_length=100)
    text = models.TextField("Сообшение", max_length=5000)
    parent = models.ForeignKey('self', verbose_name="Родитель", on_delete=models.SET_NULL, blank=True, null=True)
    movie = models.ForeignKey(Movie, verbose_name="фильм", on_delete=models.CASCADE)

    class Meta:
        """Meta definition for Reviews."""

        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):
        """Unicode representation of Reviews."""
        return f"{self.name} - {self.movie}"

