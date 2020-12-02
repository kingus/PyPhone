# Generated by Django 3.1.2 on 2020-12-01 15:04

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pyphone_app', '0016_auto_20201201_1449'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='creationDate',
            field=models.DateField(default=datetime.datetime(2020, 12, 1, 15, 4, 31, 675439)),
        ),
        migrations.CreateModel(
            name='UsersBadge',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField()),
                ('badge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pyphone_app.badge')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]