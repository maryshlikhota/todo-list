# Generated by Django 3.1.7 on 2021-03-19 12:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authors', '0001_initial'),
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='members',
            field=models.ManyToManyField(to='authors.Author'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='authors.author'),
        ),
    ]