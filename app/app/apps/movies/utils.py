from django.shortcuts import render, get_list_or_404, get_object_or_404
from .models import *

from bs4 import BeautifulSoup as bs
import requests


class ObjectsList:
    model = None
    template = None

    def get(self, request):
        objs = self.model.objects.all()
        return render(request, self.template, context={self.model.__name__.lower(): objs})


class ObjectDet:
    model = None
    template = None

    def get(self, request, slug):
        obj = get_object_or_404(self.model, slug__iexact=slug)
        # movie = data2.get(data_url)
        page = requests.get(str(obj.data_url))
        html = bs(page.content, 'lxml')
        md = {}

        html = bs(page.content, 'lxml')

        for el in html.select('.content'):
            v = el.select('#dle-content>div>a')
            # print(v[224:260], end='\n')
        md['video'] = str(
            str('[360]') + str(v[0]['href'][:122]) +
            str(',[480]') + str(v[1]['href'][:122]) +
            str(',[720]') + str(v[2]['href'][:122]) +
            str(',[1080]') + str(v[3]['href'][:122])
        )

        return render(request, self.template, context={self.model.__name__.lower(): obj, 'md': md})
