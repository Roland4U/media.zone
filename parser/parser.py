#BeautifulSoup part
import requests
from bs4 import BeautifulSoup as bs

# f = open('list.json', 'w', encoding='utf-8')
# fr = open('list.json', 'r', encoding='utf-8')

max_pages = 3


page = []
data = {}


for x in range(1, max_pages+1):
    page = requests.get(str('https://kinogo.by/page/' + str(x)))
    print(f'{str(x)}/{max_pages}')

    html = bs(page.content, 'lxml')

    for el in html.select('itemList'):
        # title = el.select('.results-item-title')
        num = el['data-id']
        name = el.select('.zagolovki>a')
        url = el.select('.zagolovki>a')
        img = el.select('.overlaytumb>img')
        # data[num[1]['id']] = {
        #     'title': name[0]['aria-label'], 
        #     'url': url[0]['href'],
        #     'poster': 'https://kinogo.by'+img[0]['src'], 
        #     'num': num[1]['id'],
        #     }
        print(str(num), end='\n\n')

page = requests.get(
    'https://kinogo.by/19474-terminator-dark-fate_2019__14-01.html')
html = bs(page.content, 'lxml')

# for el in html.select('.fullstory'):
#             # title = el.select('.results-item-title')
#     name = el.select('.shortstorytitle>h1')
#     poster = el.select('.fullimg>div>a')
#     des = el.select('.fullimg')
#     quots = str(el.select('.quote'))
#     data['name'] = str(list(name[0])[1])
#     # data['des'] = str(list(list(des[0])[2])[4] + list(list(des[0])[2])[7])
#     data['poster'] = str('https://kinogo.by'+poster[0]['href'])
    
#     quots = quots.replace('<b>', '')
#     quots = quots.replace('</b>', '')
#     quots = quots.replace('<br/>', '')
#     quots = quots.splitlines()
#     quots = str(quots).split()

for el in html.select('.content'):
    v = el.select('#dle-content>div>a')
    # print(v[224:260], end='\n')
    print(v[0]['href'][:122], end='\n')
    print(v[1]['href'][:122], end='\n')
    print(v[2]['href'][:122], end='\n')
    print(v[3]['href'][:122], end='\n')
    print(v[4]['href'][:122], end='\n')


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

# print(data)

# #Selenium part
# from selenium import webdriver
# # from selenium.webdriver.opera import webdriver
# from selenium import webdriver
# options = webdriver.ChromeOptions()

# binary_yandex_driver_file = 'yandexdriver.exe'  # path to YandexDriver

# driver = webdriver.Chrome(binary_yandex_driver_file, options=options)
# # driver.get('https://yandex.ru')


# # from selenium.webdriver.support.select import Select
 
# f = open("link.txt", 'w')

# # def main():
# # driver = webdriver.OperaDriver()
# # driver2 = webdriver.OperaDriver()
# # driver2.get("opera://settings/privacy")
# driver.get("https://w69.zona.plus/movies/bladshot")
# # driver.__getattribute__()
# select_element = driver.find_element_by_tag_name('video')#('')
# # select_object = Select(select_element)
# if select_element.get_attribute('id') == 'player_html5_api':
#     link = select_element.get_attribute('src')
# f.write(link)
# print(link)
# # os.system('start ', + str(select_element.get_attribute('src')))




# if __name__ == "__main__":
#     main()
