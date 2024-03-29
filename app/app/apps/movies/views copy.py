from django.shortcuts import render
from django.contrib import messages
from django.views.generic.base import View
from django.views.generic import TemplateView
from .utils import ObjectsList
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






max_pages = 1


pages = []
data = {}
data2 = {}

for x in range(1, max_pages + 1):
    page = requests.get('https://kinogo.by/page/' + str(x))
    print(f'{str(x)}/{max_pages}')
    pages.append(page)

    html = bs(page.content, 'lxml')


    for el in html.select('.shortstory'):
        # title = el.select('.results-item-title')
        # num = el['data-id']
        # num = el.select('zagolovki>a')
        name = el.select('.zagolovki>a')
        num = el.select('.zagolovki>a')
        url = el.select('.zagolovki>a')
        img = el.select('.overlaytumb>img')
        data[str(num[0]['href'][18:])] = {'title': name[0]['aria-label'], 'url': url[0]['href'], 'poster': str(
            'https://kinogo.by' + str(img[0]['src'])), 'num': str(num[0]['href'][18:])}
for x in range(2, max_pages + 1):
    page = requests.get('https://kinogo.by/serial/page/' + str(x))
    print(f'{str(x)}/{max_pages}')
    pages.append(page) 

    html = bs(page.content, 'lxml')

    for el in html.select('.shortstory'):
        # title = el.select('.results-item-title')
        num = el['data-id']
        name = el.select('.zagolovki>a')
        url = el.select('.zagolovki>a') 
        img = el.select('.overlaytumb>img')
        data2[str(num)] = {'title': name[0]['aria-label'], 'url': url[0]['href'], 'poster': 'https://kinogo.by'+img[0]['src'], 'num': num}

# print(data)

class MoviesList(View, ObjectsList):
    model = Movie
    template = 'movies/main.html'

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

class Movie_dec(View):
    def get(self, request, num):

        movie = data.get(num)
        page = requests.get(movie['url'])
        html = bs(page.content, 'lxml')
        md = {}

        for el in html.select('.fullstory'):
                    # title = el.select('.results-item-title')
            name = el.select('.shortstorytitle>h1')
            poster = el.select('.fullimg>div>a')
            des = el.select('.fullimg')
            quots = str(el.select('.quote'))
            
            md['name'] = str(list(name[0])[1])
           
            md['poster'] = str('https://kinogo.by'+poster[0]['href'])
            
            md['year'] = quots.splitlines(True)[1][42:46]
        # try:
        #     md['des']=str(list(list(des[0])[2])[4] + list(list(des[0])[2])[7])

        # except:
            md['des']=str(list(list(des[0])[2])[4])
            
            quots = str(quots).replace('<b>', '')
            quots = str(quots).replace('</b>', '')
            quots = str(quots).replace('<br/>', '')
            quots = quots.splitlines()
            quots = list(quots)
            loc = str(str(quots[2]).split()[1:])
            loc = loc.replace("[,", '')
            loc = loc.replace("[", '')
            loc = loc.replace("]", '')
            loc = loc.replace(",'", '')
            loc = loc.replace("'", '')
            loc = loc.replace("['", '')
            md['location'] = loc

        for el in html.select('.content'):
            v = el.select('#dle-content>div>a')
            # print(v[224:260], end='\n')
        md['video'] = str(
        str('[360]') + str(v[0]['href'][:122]) +
        str(',[480]') + str(v[1]['href'][:122]) +
        str(',[720]') + str(v[2]['href'][:122]) +
        str(',[1080]') + str(v[3]['href'][:122]) 
        )
               

        return render(request, 'movies/mov_dec.html', context={'movie': movie, 'md': md})


class Serial_dec(View):
    def get(self, request, num):

        movie = data2.get(num)
        page = requests.get(movie['url'])
        html = bs(page.content, 'lxml')
        md = {}


        html = bs(page.content, 'lxml')

        for el in html.select('.fullstory'):
                    # title = el.select('.results-item-title')
            name = el.select('.shortstorytitle>h1')
            poster = el.select('.fullimg>div>a')
            des = el.select('.fullimg')
            quots = str(el.select('.quote'))
            
            md['name'] = str(list(name[0])[1])
           
            md['poster'] = str('https://kinogo.by'+poster[0]['href'])
            
            md['year'] = quots.splitlines(True)[1][42:46]
        try:
            md['des']=str(list(list(des[0])[2])[4] + list(list(des[0])[2])[7])

        except:
            md['des']=str(list(list(des[0])[2])[4])
            
            quots = str(quots).replace('<b>', '')
            quots = str(quots).replace('</b>', '')
            quots = str(quots).replace('<br/>', '')
            quots = quots.splitlines()
            quots = list(quots)
            loc = str(str(quots[2]).split()[1:])
            loc = loc.replace("[,", '')
            loc = loc.replace("[", '')
            loc = loc.replace("]", '')
            loc = loc.replace(",'", '')
            loc = loc.replace("'", '')
            loc = loc.replace("['", '')
            md['location'] = loc

        for el in html.select('.content'):
            v = el.select('#dle-content>div>a')
            # print(v[224:260], end='\n')
        md['video'] = str(
        str('[360]') + str(v[0]['href'][:122]) +
        str(',[480]') + str(v[1]['href'][:122]) +
        str(',[720]') + str(v[2]['href'][:122]) +
        str(',[1080]') + str(v[3]['href'][:122]) 
        )
               

        return render(request, 'movies/mov_dec.html', context={'movie': movie, 'md': md})

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
                url=col['page'],
                data_url=col['page'],
                # category=1

                # draft=col['draft']
            )
            obj = Movie.objects.get(title=col['title'])
            if col['rating']['kp']:
                obj.kinopoisk=str(col['rating']['kp'])
            # if col['rating']['IMDB:']:
                obj.amdb=str(col['rating']['IMDB:'])
            
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
