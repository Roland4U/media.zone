from bs4 import BeautifulSoup as bs
import requests

# req = rq.get(
#     'https://www.kinopoisk.ru/top/navigator/m_act[num_vote]/10/m_act[rating]/1%3A/m_act[is_film]/on/m_act[is_mult]/on/order/year/perpage/200/page/2/#results')
t = 'https://www.kinopoisk.ru/top/navigator/m_act[num_vote]/10/m_act[rating]/1%3A/m_act[is_film]/on/m_act[is_mult]/on/order/year/perpage/200/page/2/#results'


#Selenium part
# from selenium import webdriver
# from selenium.webdriver.opera import webdriver
from selenium import webdriver
options = webdriver.ChromeOptions()

binary_yandex_driver_file = 'yandexdriver.exe'  # path to YandexDriver

driver = webdriver.Chrome(binary_yandex_driver_file, options=options)
# driver.get('https://yandex.ru')


# from selenium.webdriver.support.select import Select

f = open("link.txt", 'w')

# def main():
# driver = webdriver.OperaDriver()
# driver2 = webdriver.OperaDriver()
# driver2.get("opera://settings/privacy")
driver.get(t)
# driver.__getattribute__()
select_element = driver.find_element_by_tag_name('video')#('')
# select_object = Select(select_element)
if select_element.get_attribute('class') == 'item _NO_HIGHLIGHT_':
    link = select_element.find_element('a')
f.write(link)
print(link)
# os.system('start ', + str(select_element.get_attribute('src')))
