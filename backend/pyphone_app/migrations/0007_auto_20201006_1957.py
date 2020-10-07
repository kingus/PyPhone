# Generated by Django 2.2.15 on 2020-10-06 19:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0006_auto_20201006_1952'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='exercise_id',
        ),
        migrations.AddField(
            model_name='exercise',
            name='course_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='pyphone_app.Course'),
        ),
    ]
