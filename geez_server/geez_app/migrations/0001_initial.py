# Generated by Django 4.2.6 on 2024-10-10 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Gis', models.CharField(max_length=100)),
                ('phonetic', models.CharField(blank=True, max_length=100, null=True)),
                ('part_of_speech', models.CharField(max_length=50)),
                ('translation', models.TextField()),
                ('root', models.CharField(blank=True, max_length=100, null=True)),
                ('plural', models.CharField(blank=True, max_length=100, null=True)),
                ('synonyms', models.CharField(blank=True, max_length=100, null=True)),
                ('antonyms', models.CharField(blank=True, max_length=100, null=True)),
                ('example_usage', models.TextField(blank=True, null=True)),
                ('derived_forms', models.TextField(blank=True, null=True)),
                ('etymology', models.TextField(blank=True, null=True)),
                ('gender', models.CharField(blank=True, max_length=50, null=True)),
                ('audio_pronunciation', models.FileField(blank=True, null=True, upload_to='audio/')),
                ('notes', models.TextField(blank=True, null=True)),
            ],
        ),
    ]