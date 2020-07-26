from django.urls import path
from . import views as v
from django.urls import path, include
from .views import UserReg as reg
from django.contrib.auth import views as login
from django.conf.urls.static import static
from django.conf.urls import include, url
from .forms import UserLogForm

urlpatterns = [
    path('', v.Movie_List.as_view(),  name='m'),
    path('/', v.Movie_List.as_view(),  name='h'),
    path('reg', reg.as_view(), name='reg'),
    path('login', login.LoginView.as_view(template_name='base/login.html'), name='login'),
    path('exit', login.LogoutView.as_view(next_page='m'), name='exit'),
    path('upload', v.upload),
    path('serials', v.SerialsView.as_view(),  name='s'),
    path('movie/<str:slug>', v.Movie_dec.as_view(), name="movie_dec"),
    path('serials/<str:num>', v.Serial_dec.as_view(), name="num1"),
]
