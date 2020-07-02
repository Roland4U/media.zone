from django.shortcuts import render
from django.contrib import messages
from django.views.generic.base import View
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from .utils import *
import os, sys, codecs
# from django.db import models
# from .models import *
from .models import Movie, Actor, Category, Genre, Category
import json

#BeautifulSoup part
import requests
from bs4 import BeautifulSoup as bs


# f = open('list.json', 'w', encoding='utf-8')
# fr = open('list.json', 'r', encoding='utf-8')



class MoviesList(ListView):
    model = Movie
    paginate_by = 2  # number of posts will load
    context_object_name = 'movie'
    template_name = 'movies/main.html'
    ordering = ['-id']

# class SerialsList(View, ObjectsList):
#     model = Serial
#     template = 'movies/main.html'

class MoviesView(View):
    def get(self, request):

        movies = data.values()
        return render(request, 'movies/main.html', context={'movies': movies})
class SerialsView(View):
    def get(self, request):

        movies = data2.values()
        return render(request, 'movies/main1.html', context={'movies': movies})

class Movie_dec(View, ObjectDet):
    model = Movie
    template = 'movies/mov_dec.html'
    


class Serial_dec(View):
    def get(self, request, num):
     pass

def upload(request):
    def get_genre(x):
        g = Genre.objects.filter(name__icontains=u''+x.upper()).first()
        return g
    # def get_actor(x):
    #     o = Movie.actors.get_or_create(name=x)

    #     return o
    if request.method == 'POST':
        uploaded_file = request.FILES['document']
        print(uploaded_file.name)
        print(int(uploaded_file.size) / 1000)

        # if not uploaded_file.endswith('.json'):
        #     messages.error(request, 'This is not a JSON file')
        
        data_set = json.load(uploaded_file)

        # def get_directors(directors):
        #     Actor.objects.get_or_create(name=str(directors).upper())

        for col in data_set:
            _, created = Movie.objects.update_or_create(
                title=col['title'],
                quality=col['quality'],
                translate=col['translate'],
                duration=col['duration'],
                description=col['des'],
                poster=col['poster'],
                year=int(col['year']),
                country=col['loacation'][0],
                slug=col['page'][18::],
                data_url=col['page']
                # category=1

                # draft=col['draft']
            )
            obj = Movie.objects.get(title=col['title'])
            # if col['rating']['kp']:
            #     obj.kinopoisk=str(col['rating']['kp'])
            # # if col['rating']['IMDB:']:
            #     obj.amdb=str(col['rating']['IMDB:'])
            
            for g in col['genres']:
                obj.genres.add(get_genre(g))
            for d in col['director']:
                obj.directors.get_or_create(
                    name=d,  description='asd', image='https://www.youtube.com/')
            for a in col['actors']:
                obj.actors.get_or_create(name=a,  description='asd', image='https://www.youtube.com/')
                
                # c.category.add1,
           
    return render(request, 'upload.html')

#Model
# data = {
#     'title': name
#     'tagline':
#     'description':
#     'poster':
#     'year':
#     'country':
#     'directors':
#     'actors':
#     'genres':
#     'world_premier':
#     'budget':
#     'fess_in_usa':
#     'fess_in_world':
#     'category':
#     'url':



# class Movie_list(View):
    
def csrf_failure(request, reason=""):
    ctx = {'message': 'some custom messages'}
    return render(request, "csrf.html", ctx)
