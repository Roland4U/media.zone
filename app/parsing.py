import requests
from bs4 import BeautifulSoup as bs
import json
import codecs

r = requests.get(
    'https://kinogo.by/3983-sverhestestvennoe-15-sezon___14-10.html')

html = bs(r.content, 'lxml')
# l = []
b = []
for i in html.select('.visible'):
    # b = str(i.select('script')[2])
    l = str(i.select('script')[2]).replace("<script>", '').replace("var player1 = new Playerjs", '').replace("//var engine = new p2pml.hlsjs.Engine();", '').replace("var player1=new Playerjs", '').replace("({id", '{"id"').replace("hlsconfig", '"hlsconfig"').replace(
        "p2pConfig", '"p2pConfig"').replace("logLevel", '"logLevel"').replace("live", '"live"').replace(",        // set to true in \"live\" mode", '').replace("preroll", '"preroll"').replace("//p2pml.hlsjs.initHlsJsPlayer(player1.api('hls'));", '').replace("cuid", '"cuid"').replace("preview.jpg\"});", 'preview.jpg"}').replace("</script>", '')
    
# l = str(l).split(',')
# l = dict(l)
# b.append(l)
t = json.loads(str(l))
print(t.get('poster'))

    # .replace(
        # "$('.box_trailers').load('", '').replace("', function() { });", '')
# with open('st.json', 'wt', encoding='utf-8') as data:
#     data.write(t)
# print(type(l), end='\n\n***END***\n\n')

    
# r2 = requests.get('https://kinogo.by/'+l)

# soup = bs(r2.content, 'lxml')

# for s in soup.select('body'):
#     t = str(s.select('script')[0]).replace(
#         "<script>", '').replace("var player = new Playerjs(", '').replace(');', '').replace("</script>", '').replace(" ", '').replace("id", '"id"').replace("file", '"file"')
#     t = json.loads(str(t))
#     print(t["file"], end='\n\n')
