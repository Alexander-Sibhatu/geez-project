from rest_framework import serializers
from . models import Gis

class GisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gis
        fields = ['ግስ', 'ው', 'በብ','ለሴ','ባዕ_ቅ','መድ','ሳ_ዘ','ጥ_ዘ','ዘመ_ዘ','ዘ_ው','ጥ_ው','ባዕ_ሣ_ቅ','ባዕ_ጥ','ባዕ_ጉ',
                  'ባዕ_ዘ','ባዕ_ወም','ምዕ_ው','ምዕ','ጉል','ለአንድ_ለብ','የሰ_ስ','አስ_እደ','አስ_አን','አስ_አህ','ጉል_ው','ጥ_ምዕ',
                  'ጥ_ምዕ_ው','ባዕ_ዘ_ው','ተጨማሪ_ማብራሪያ']  # 'audio_pronunciation' will return the file URL
