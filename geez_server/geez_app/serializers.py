from rest_framework import serializers
from . models import Gis

class GisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gis
        fields = ['Gis', 'phonetic', 'part_of_speech','translation','root','plural','synonyms','antonyms','example_usage','derived_forms','etymology','gender','audio_pronunciation','notes']  # 'audio_pronunciation' will return the file URL
