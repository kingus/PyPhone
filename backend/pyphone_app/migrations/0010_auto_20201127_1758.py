# Generated by Django 3.1.2 on 2020-11-27 17:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0009_auto_20201127_1755'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userscourse',
            name='finishDate',
            field=models.DateField(default=datetime.datetime(9999, 12, 31, 0, 0)),
        ),
    ]
