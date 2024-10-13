from django.urls import path
from .views import GisdList, GisDetail

urlpatterns = [
    path('gis/', GisdList.as_view(), name='gid-list'),
    path('gis/<int:pk>/', GisDetail.as_view(), name='gis-detail'),
]