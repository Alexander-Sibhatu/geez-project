from django.db import models

# Create your models here.
class Gis(models.Model):
    ግስ = models.CharField(max_length=100)
    ው = models.CharField(max_length=100, blank=True, null=True)
    በብ= models.CharField(max_length=50)
    ለሴ = models.CharField(max_length=100, blank=True, null=True)
    ባዕ_ቅ = models.CharField(max_length=100, blank=True, null=True, verbose_name="ባዕ.ቅ")
    መድ = models.CharField(max_length=100, blank=True, null=True)
    ሳ_ዘ = models.CharField(max_length=100, blank=True, null=True, verbose_name="ሳ.ዘ")
    ጥ_ዘ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ጥ.ዘ")
    ዘመ_ዘ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ዘመ.ዘ")
    ዘ_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ዘ.ው")
    ጥ_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ጥ.ው")
    ባዕ_ሣ_ቅ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ ሣ.ቅ")
    ባዕ_ጥ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ ጥ")
    ባዕ_ጉ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ.ጉ")
    ባዕ_ዘ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ.ዘ")
    ባዕ_ወም = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ ወም")
    ምዕ_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ምዕ.ው")
    ምዕ = models.CharField(max_length=50, blank=True, null=True)
    ጉል = models.CharField(max_length=50, blank=True, null=True)
    ለአንድ_ለብ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ለአንድ ለብዙ")
    የሰ_ስ = models.CharField(max_length=50, blank=True, null=True, verbose_name="የሰ.ስ")
    አስ_እደ = models.CharField(max_length=50, blank=True, null=True, verbose_name="አስ.እደ")
    አስ_አን = models.CharField(max_length=50, blank=True, null=True, verbose_name="አስ.አን")
    አስ_አህ = models.CharField(max_length=50, blank=True, null=True, verbose_name="አስ.አህ")
    ጉል_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ጉል.ው")
    ጥ_ምዕ = models.CharField(max_length=50, blank=True, null=True, verbose_name="ጥ.ምዕ")
    ጥ_ምዕ_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ጥ.ምዕ.ው")
    ባዕ_ዘ_ው = models.CharField(max_length=50, blank=True, null=True, verbose_name="ባዕ.ዘ.ው")
    ተጨማሪ_ማብራሪያ = models.TextField(blank=True, null=True, verbose_name="ተጨማሪ ማብራሪያ")


    def __str__(self):
        return self.Gis