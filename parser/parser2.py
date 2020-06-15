

import requests
from bs4 import BeautifulSoup as BS

f = open('list.txt', 'r', encoding='utf-8')

max_pages = 1
pages = []

for x in f:
    pages.append(requests.get(str(x)))
    
    

for r in pages:
    html = BS(r.content, 'lxml')

    for el in html.select('body'):
        # title = el.select('.results-item-title')
        link = el.select('video', id="player_html5_api")

        # print(link[0]['poster'], end='\n\n')
        # f.write(link[0]['src']+'\n')
        print(html.select('body'))
# print(BS)

# for tag in html.find_all("#player_html5_api"):
#         print("{0}: {1}".format(tag.name, tag))

# print(html.select("#"))

