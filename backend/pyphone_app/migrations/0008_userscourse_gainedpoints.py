# Generated by Django 3.1.2 on 2020-11-22 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0007_auto_20201113_1129'),
    ]

    operations = [
        migrations.AddField(
            model_name='userscourse',
            name='gainedPoints',
            field=models.IntegerField(default=0),
        ),
    ]
