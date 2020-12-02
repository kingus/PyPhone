# Generated by Django 3.1.2 on 2020-12-01 15:32

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pyphone_app', '0019_auto_20201201_1531'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('achievementName', models.CharField(max_length=100)),
                ('achievementDescription', models.CharField(max_length=350)),
            ],
        ),
        migrations.AlterField(
            model_name='profile',
            name='creationDate',
            field=models.DateField(default=datetime.datetime(2020, 12, 1, 15, 32, 38, 687601)),
        ),
        migrations.CreateModel(
            name='UsersAchievement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField()),
                ('achievement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pyphone_app.achievement')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]