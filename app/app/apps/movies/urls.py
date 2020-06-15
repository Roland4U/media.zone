from django.urls import path
from . import views as v

urlpatterns = [
    path('', v.MoviesView.as_view(),  name='m'),
    path('serials', v.SerialsView.as_view(),  name='s'),
    path('movie/<str:num>', v.Movie_dec.as_view(), name="num"),
    path('serials/<str:num>', v.Serial_dec.as_view(), name="num1"),
]
