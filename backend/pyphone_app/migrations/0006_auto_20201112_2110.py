# Generated by Django 3.1.2 on 2020-11-12 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0005_auto_20201112_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercisetype',
            name='exercise_type',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
