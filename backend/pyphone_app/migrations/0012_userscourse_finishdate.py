# Generated by Django 3.1.2 on 2020-11-27 18:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0011_remove_userscourse_finishdate'),
    ]

    operations = [
        migrations.AddField(
            model_name='userscourse',
            name='finishDate',
            field=models.DateField(default=datetime.datetime(9999, 12, 31, 0, 0)),
        ),
    ]
