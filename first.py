import selenium
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import bs4
from bs4 import BeautifulSoup
from data import d
from data import y
from queue import deque
driver=webdriver.Chrome()
driver.get('https://www.nytimes.com/games/wordle/index.html')
# search = driver.find_element(By.NAME,'q')
# search.send_keys("wordle")
# search.send_keys(Keys.RETURN)
# time.sleep(3)
# results = driver.find_element(By.XPATH,'//*[@id="rso"]/div[1]/div/div/div/div/div/div/div[1]/a').click()  # finds webresults
xbutton=driver.find_element(By.XPATH,'/html/body/div/div/dialog/div/button').click()

def start(s):
    for i in s:
        guess=driver.find_element(By.XPATH, d[i]).click()
    guess=driver.find_element(By.XPATH, d['enter']).click()
    time.sleep(5)
start('slate')
yellow=[]
black=[]
green=[]
content=driver.page_source
soup=BeautifulSoup(content, features="html.parser")
tiles=deque(soup.find_all(class_="Tile-module_tile__3ayIZ"))
print(len(tiles))
# print(tiles[0])
# print(tiles[0]['aria-label'])
g='slate'
print(len(y))
inc=5
while len(y)!=1 or len(green)!=5:
    # for i in range(inc):
    #     tiles.popleft()
    # inc+=5
    for i in range(5):
        cell=tiles[i]['aria-label']
        cell_cont=cell.split(" ")
        print(cell_cont)
        temp=[]
        if cell_cont[1]=='absent':
            for word in y:
                if cell_cont[0] not in word:
                    temp.append(word)
        elif cell_cont[1]=='present':
            for word in y:
                if word[i]!=cell_cont[0] and cell_cont[0] in word:
                    temp.append(word)
        elif cell_cont[1]=='correct':
            green.append(cell_cont[0])
            for word in y:
                if word[i]==cell_cont[0]:
                    temp.append(word)
        y=temp
    
    if len(green)==5:
        print("Answer is:", g)
        break
    else:
        green=[]
        g=y[0]
        start(g)
        content=driver.page_source
        soup=BeautifulSoup(content, features="html.parser")
        tiles=deque(soup.find_all(class_="Tile-module_tile__3ayIZ"))
    
row=soup.find(class_="Tile-module_tile__3ayIZ")
driver.quit()


