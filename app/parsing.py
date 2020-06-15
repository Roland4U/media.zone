#!/usr/bin/env python
# import os
# import sys

# try:
#     os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')
#     print('ok')
#     from apps.movies.models import Movie
#     print('pff')
# except:
#     print('no')

import json
from app.apps.movies import models

links_list = []
with open('kino.json', 'r') as data:

    for i in json.loads(data.read()):
        links_list.append(i.get('year'))

print(str(links_list))

l = models.Movie.objects.all()
print(str(l))