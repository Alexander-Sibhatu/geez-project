from django.db import models

# Create your models here.
class Gis(models.Model):
    Gis = models.CharField(max_length=100)
    phonetic = models.CharField(max_length=100, blank=True, null=True)
    part_of_speech = models.CharField(max_length=50)
    translation = models.TextField()
    root = models.CharField(max_length=100, blank=True, null=True)
    plural = models.CharField(max_length=100, blank=True, null=True)
    synonyms = models.CharField(max_length=100, blank=True, null=True)
    antonyms = models.CharField(max_length=100, blank=True, null=True)
    example_usage = models.TextField(blank=True, null=True)
    derived_forms = models.TextField(blank=True, null=True)
    etymology = models.TextField(blank=True, null=True)
    gender = models.CharField(max_length=50, blank=True, null=True)
    audio_pronunciation = models.FileField(upload_to='audio/', blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.Gis