# Generated by Django 5.1.4 on 2025-01-04 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geez_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gis',
            old_name='antonyms',
            new_name='ለሴ',
        ),
        migrations.RenameField(
            model_name='gis',
            old_name='phonetic',
            new_name='መድ',
        ),
        migrations.RenameField(
            model_name='gis',
            old_name='gender',
            new_name='ምዕ',
        ),
        migrations.RenameField(
            model_name='gis',
            old_name='part_of_speech',
            new_name='በብ',
        ),
        migrations.RenameField(
            model_name='gis',
            old_name='plural',
            new_name='ው',
        ),
        migrations.RenameField(
            model_name='gis',
            old_name='Gis',
            new_name='ግስ',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='audio_pronunciation',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='derived_forms',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='etymology',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='example_usage',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='notes',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='root',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='synonyms',
        ),
        migrations.RemoveField(
            model_name='gis',
            name='translation',
        ),
        migrations.AddField(
            model_name='gis',
            name='ለአንድ_ለብ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ለአንድ ለብ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ምዕ_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ምዕ.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ሳ_ዘ',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='ሳ.ዘ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ሣ_ቅ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ ሣ.ቅ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ቅ',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='ባዕ.ቅ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ወም',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ ወም'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ዘ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ.ዘ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ዘ_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ.ዘ.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ጉ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ.ጉ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ባዕ_ጥ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ባዕ.ጥ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ተጨማሪ_ማብራሪያ',
            field=models.TextField(blank=True, null=True, verbose_name='ተጨማሪ_ማብራሪያ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='አስ_አህ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='አስ.አህ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='አስ_አን',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='አስ.አን'),
        ),
        migrations.AddField(
            model_name='gis',
            name='አስ_እደ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='አስ.እደ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ዘ_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ዘ.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ዘመ_ዘ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ዘመ.ዘ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='የሰ_ስ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='የሰ ስ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጉል',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጉል_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ጉል.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጥ_ምዕ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ጥ.ምዕ'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጥ_ምዕ_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ጥ.ምዕ.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጥ_ው',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ጥ.ው'),
        ),
        migrations.AddField(
            model_name='gis',
            name='ጥ_ዘ',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='ጥ.ዘ'),
        ),
    ]
