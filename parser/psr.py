from selenium import webdriver
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
driver.get("https://kinogo.by/23430-zima_2020.html")
# driver.__getattribute__()
select_element = driver.find_element_by_tag_name('video')#('')
# select_object = Select(select_element)
if select_element.get_attribute('id') == 'player_html5_api':
    link = select_element.get_attribute('src')
f.write(link)
print(link)
# os.system('start ', + str(select_element.get_attribute('src')))




# if __name__ == "__main__":
#     main()
