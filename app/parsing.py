import requests
from bs4 import BeautifulSoup as bs
import json

r = requests.get('https://kinogo.by/7528-agents-of-shield_1-7-sezon.html')

html = bs(r.content, 'html.parser')
# l = None
for i in html.select('.visible'):
    l = str(i.select('script')[2]).replace("<script>", '').replace("// var engine=new p2pml.hlsjs.Engine()", '').replace("var player1=new Playerjs", '').replace("id", '\"id\"').replace("//p2pml.hlsjs.initHlsJsPlayer(player1.api('hls'));", '').replace("</script>", '')
# l = str(l).split(',')
# l = dict(l)
# t = json.scanner(str(l))

    # .replace(
        # "$('.box_trailers').load('", '').replace("', function() { });", '')
    print(l, end='\n\n***END***\n\n')

    
# r2 = requests.get('https://kinogo.by/'+l)

# soup = bs(r2.content, 'lxml')

# for s in soup.select('body'):
#     t = str(s.select('script')[0]).replace(
#         "<script>", '').replace("var player = new Playerjs(", '').replace(');', '').replace("</script>", '').replace(" ", '').replace("id", '"id"').replace("file", '"file"')
#     t = json.loads(str(t))
#     print(t["file"], end='\n\n')
