import requests as req
from bs4 import BeautifulSoup as bs

a = req.get('https://w69.zona.plus/ajax/video/2729006')



print(a.json()['url'])
print(a.json()['url'].split('/')[3])

