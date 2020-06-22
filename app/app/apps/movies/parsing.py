#!/usr/bin/env python
import os
import sys

try:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')
    print('ok')
#     from apps.movies.models import Movie
#     print('pff')
except:
    print('no')

import json
from .models import Movie

# links_list = []
# with open('kino.json', 'r') as data:

#     for i in json.loads(data.read()):
#         links_list.append(i.get('year'))

# print(str(links_list))
# print(str(Genre.objects.all()))
# def get_Genre(g):
#     genre = Genre.objects.get(id=g)
#     return genre

# get_Genre(1)

links_list = []
with open('kino.json', 'r') as data:

    for i in json.loads(data.read()):
        links_list.append(i.get('year'))

print(str(links_list))

l = Movie.objects.all()
print(str(l))
# Category
# Actor
# Genre
# Movie
# Serial
# MovieShots
# RatingStar
# Rating
# Reviews
# l = Gen.objects.all()
# print(str(l))
