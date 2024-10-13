from rest_framework import generics
from . models import Gis
from . serializers import GisSerializer

class GisdList(generics.ListCreateAPIView):
    queryset = Gis.objects.all()
    serializer_class = GisSerializer

class GisDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gis.objects.all()
    serializer_class = GisSerializer