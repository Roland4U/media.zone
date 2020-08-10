from django.shortcuts import render, get_list_or_404, get_object_or_404
from .models import *

from bs4 import BeautifulSoup as bs
import requests
import json
import lxml

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
        obj = get_object_or_404(self.model, url__iexact=slug)
        # movie = data2.get(data_url)
        page = requests.get(str(obj.data_url))
        html = bs(page.content, 'lxml') 
        md = {}
        md['trailer'] = None

    

        try:
            for el in html.select('.content'):
                v = el.select('#dle-content>div>a')
                # print(v[224:260], end='\n')
            md['video'] = str(
                str('[360]') + str(v[0]['href'][:122]) +
                str(',[480]') + str(v[1]['href'][:122]) +
                str(',[720]') + str(v[2]['href'][:122]) +
                str(',[1080]') + str(v[3]['href'][:122])
            )
        except:
            try:
                for i in html.select('.visible'):
                # b = str(i.select('script')[2])
                    l = str(i.select('script')[2]).replace("<script>", '').replace("var player1 = new Playerjs", '').replace("//var engine = new p2pml.hlsjs.Engine();", '').replace("var player1=new Playerjs", '').replace("({id", '{"id"').replace("hlsconfig", '"hlsconfig"').replace("p2pConfig", '"p2pConfig"').replace("logLevel", '"logLevel"').replace("live", '"live"').replace(",        // set to true in \"live\" mode", '').replace("preroll", '"preroll"').replace("//p2pml.hlsjs.initHlsJsPlayer(player1.api('hls'));", '').replace("cuid", '"cuid"').replace("preview.jpg\"});", 'preview.jpg"}').replace("</script>", '')

                l = json.loads(str(l))
                md['video'] = l['file']
                print(md['video'])
        
            except:
                for i in html.select('.visible'):
                # b = str(i.select('script')[2])
                    l = str(i.select('script')[2]).replace("var fmp4 = ", '').replace("<script>", '').replace("var player1 = new Playerjs", '').replace("//var engine = new p2pml.hlsjs.Engine();", '').replace("var player1=new Playerjs", '').replace("({id", '{"id"').replace("hlsconfig", '"hlsconfig"').replace("p2pConfig", '"p2pConfig"').replace("logLevel", '"logLevel"').replace("live", '"live"').replace(",        // set to true in \"live\" mode", '').replace("preroll", '"preroll"').replace("//p2pml.hlsjs.initHlsJsPlayer(player1.api('hls'));", '').replace("cuid", '"cuid"').replace("preview.jpg\"});", 'preview.jpg"}').replace("</script>", '')

                # l = json.loads(str(l))
                md['video'] = l
                print(md['video'])
        def get_trail(x):
            try:
                for i in html.select('.section>ul.tabs'):
                    l = str(i.select('li')[x]['onclick']).replace("if (!window.__cfRLUnblockHandlers) return false; ", '').replace("$('.box_trailers').load('/", '').replace("', function() { });", '')
                    # .replace(" ", '')https://cdn.plrjs.com/player/k4rz3391aa89i/izc6xultqnb1.html?file=https://www.youtube.com/watch?v=$(&
        
                r2 = requests.get(str('https://kinogo.by/' + str(l)))

                soup = bs(r2.content, 'lxml')

                for s in soup.select('body'):
                    t = str(s.select('script')[0]).replace("<script>", '').replace("var player = new Playerjs(", '').replace(");'", '').replace("</script>", '').replace(" ", '').replace("id:", '"id":').replace("file:", '"file":').replace(" \"});", '}').replace(");", '')
                t = json.loads(str(t))
                    
                trail = t["file"]

            except IndexError:
                trail = None

            else:
                for i in html.select('.section>ul.tabs'):
                    l = str(i.select('li')[x]['onclick']).replace("if (!window.__cfRLUnblockHandlers) return false; ", '').replace("$('.box_trailers').load('/engine/ajax/gettrailers.php?string_name=", '').replace("', function() { });", '').replace(" ", '')
                    # 
            
                trail = str("https://www.youtube.com/watch?v=" + str(l))
                

            return trail
            # else:
        md['trailer'] = get_trail(4)
        if md['trailer']==None:
            md['trailer'] = get_trail(3)


        return render(request, self.template, context={self.model.__name__.lower(): obj, 'md': md})

