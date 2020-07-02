from django.urls import path
from . import views as v

urlpatterns = [
    path('', v.MoviesList.as_view(),  name='m'),
    path('upload', v.upload),
    path('serials', v.SerialsView.as_view(),  name='s'),
    path('movie/<str:slug>', v.Movie_dec.as_view(), name="movie_dec"),
    path('serials/<str:num>', v.Serial_dec.as_view(), name="num1"),
]
