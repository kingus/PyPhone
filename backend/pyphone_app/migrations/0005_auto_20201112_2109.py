# Generated by Django 3.1.2 on 2020-11-12 21:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0004_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='exercise_type',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='pyphone_app.exercisetype'),
        ),
    ]