# Generated by Django 2.2.15 on 2020-08-15 18:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pyphone_app', '0004_auto_20200815_1843'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='task_type',
            field=models.OneToOneField(default=2, on_delete=django.db.models.deletion.CASCADE, to='pyphone_app.TaskType'),
            preserve_default=False,
        ),
    ]
