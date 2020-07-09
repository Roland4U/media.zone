from django.shortcuts import render, redirect
from django.contrib import messages
from django.views.generic.base import View
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from .forms import UserRegForm, UserLogForm
from django.contrib.auth.forms import UserCreationForm, User
from django.contrib.auth.views import AuthenticationForm as Form
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from .utils import *
import os, sys, codecs
# from django.db import models
# from .models import *
from .models import Movie, Actor, Category, Genre, Category
from django.db.models import Q
from django.core.paginator import Paginator
import json

#BeautifulSoup part
import requests
from bs4 import BeautifulSoup as bs


# f = open('list.json', 'w', encoding='utf-8')
# fr = open('list.json', 'r', encoding='utf-8')

# 'login_form': login_form, 'reg_form': reg_form

class UserReg(UserRegForm, UserCreationForm, View):
    def get(self, request):

        reg_form = UserRegForm()

        return render(request, 'base/user_reg.html', context={'reg_form': reg_form})

    def post(self, request):
        if request.method == "POST":
            reg_form = UserRegForm(request.POST)
            if reg_form.is_valid():
                reg_form.save()
                return redirect('m')

class MoviesList(UserReg, ListView):
    model = Movie
    paginate_by = 24  # number of posts will load
    context_object_name = 'movie'
    template_name = 'movies/main.html'
    ordering = ['-id']
    genr = Genre.objects.all()
    context = {"genres": genr}
# class SerialsList(View, ObjectsList):
#     model = Serial
#     template = 'movies/main.html'

class Movie_List(UserReg, View):
    def get(self, request):
        genres = Genre.objects.all()
        search_query = request.GET.get('search', '')
        login_form = UserLogForm()
        reg_form = UserRegForm()

        if search_query:
            movies = Movie.objects.filter(Q(title__icontains=search_query))
        else:
            movies = Movie.objects.all()
        
        paginator = Paginator(movies, 24)

        page_number = request.GET.get('page', 1)
        page = paginator.get_page(page_number)

        is_paginated = page.has_other_pages()

        if page.has_previous():
            prev_url = '?page={}'.format(page.previous_page_number())
        else:
            prev_url = ''
        
        if page.has_next():
            next_url = '?page={}'.format(page.next_page_number())
        else:
            next_url = ''

        context = {
            'movie': page.object_list,
            'genres': genres,
            'page': page,
            'login_form': login_form,
            'reg_form': reg_form,
        }
        return render(request, 'movies/main.html', context)


class MoviesView(View):
    def get(self, request):

        movies = data.values()
        login_form = UserLogForm()
        reg_form = UserRegForm()
        return render(request, 'movies/main.html', context={
            'movies': movies, 
            'login_form': login_form,
            'reg_form': reg_form,
            })
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
        print(int(uploaded_file.size) / 1024)

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
                url=col['page'][18::],
                data_url=col['page'],

                # draft=col['draft']
            )
            obj = Movie.objects.get(url__iexact=col['page'][18::])
            # if col['rating']['kp']:
            #     obj.kinopoisk=str(col['rating']['kp'])
            # # if col['rating']['IMDB:']:
            #     obj.amdb=str(col['rating']['IMDB:'])
            
            for g in col['genres']:
                if g == None:
                    continue
                obj.genres.add(get_genre(g))
            for d in col['director']:
                if d == None:
                    continue
                obj.directors.get_or_create(name=d)
            for a in col['actors']:
                if a == None:
                    continue
                obj.actors.get_or_create(name=a)
                
                # c.category.add1,
            print(obj)
           
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
