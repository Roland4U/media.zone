from bs4 import BeautifulSoup as bs
import requests
import json

list_f = open('list1.txt', 'a', encoding='utf-8')
list_r = open('list.txt', 'r', encoding='utf-8')
data_f = open('data.json', 'a', encoding='utf-8')


# json.dump(data, data_f, indent=3, ensure_ascii=False)


max_pages = 1000
page = []
data = {}

def get_list():
    a = 1
    for x in range(1, max_pages+1):
        page = requests.get(str('https://my-hit.org/film/?p=' + str(x)))
        print(f'{str(x)}/{max_pages}')

        html = bs(page.content, 'lxml')
        for el in html.select('.film-list>div'):
            # title = el.select('.results-item-title')
            # num = el['data-id']
            # name = el.select('.zagolovki>a')
            url = str(el.select('.col-xs-3>a')[0]['href'])
            # img = el.select('.overlaytumb>img')
            # data[num[1]['id']] = {
            #     'title': name[0]['aria-label'],
            #     'url': url[0]['href'],
            #     'poster': 'https://kinogo.by'+img[0]['src'],
            #     'num': num[1]['id'],
            #     }
            # print(str(num), end='\n\n')
            # list_f.write(str(url[0]['href'] + '\n'))
            # print(a, str('https://my-hit.org'+url))
            a+=1
    
get_list()
# for p in list_r.readlines():
#     page = requests.get(p)
#     html = bs(page.content, 'lxml')

#     for el in html.select('.fullstory'):
#                 # title = el.select('.results-item-title')
#         name = el.select('.shortstorytitle>h1')
#         poster = el.select('.fullimg>div>a')
#         des = el.select('.fullimg')
#         quots = str(el.select('.quote'))

#         json.dump(
#             {'name': str(list(name[0])[1].replace(str(" ("+quots.splitlines(True)[1][42:46]+")"), '')),
#              'poster': str('https://kinogo.by'+poster[0]['href']),
#              'year': quots.splitlines(True)[1][42:46]}, data_f, indent=2, ensure_ascii=False
#         )
#         print('ok')

# for el in html.select('.content'):
#     v = el.select('#dle-content>div>a')
#     # print(v[224:260], end='\n')
#     print(v[0]['href'][:122], end='\n')
#     print(v[1]['href'][:122], end='\n')
#     print(v[2]['href'][:122], end='\n')
#     print(v[3]['href'][:122], end='\n')
#     print(v[4]['href'][:122], end='\n')


# print(data, end='\n\n')
    # f.write(link[0]['href']+'\n')

# for r in pages:
    #Model
# data = {
    # 'title': name,
    # 'tagline':,
    # 'description':
    # 'poster': img,
    # 'year':
    # 'country':
    # 'directors':
    # 'actors':
    # 'genres':
    # 'world_premier':
    # 'budget':
    # 'fess_in_usa':
    # 'fess_in_world':
    # 'category':
    # 'url': url
# }
