# Generated by Django 3.1.2 on 2020-11-06 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='code',
            field=models.CharField(max_length=350, null=True),
        ),
    ]