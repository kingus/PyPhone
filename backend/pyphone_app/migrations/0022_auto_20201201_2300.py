# Generated by Django 3.1.2 on 2020-12-01 23:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0021_auto_20201201_2006'),
    ]

    operations = [
        migrations.AddField(
            model_name='usersachievement',
            name='condition',
            field=models.CharField(default='', max_length=350),
        ),
        migrations.AlterField(
            model_name='profile',
            name='creationDate',
            field=models.DateField(default=datetime.datetime(2020, 12, 1, 23, 0, 43, 683022)),
        ),
    ]