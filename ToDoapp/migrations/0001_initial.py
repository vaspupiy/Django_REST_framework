# Generated by Django 4.0.2 on 2022-03-07 12:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=64, verbose_name='project_name')),
                ('link', models.URLField(verbose_name='repository_link')),
                ('worker', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='worker')),
            ],
            options={
                'verbose_name': 'Project',
                'db_table': 'project',
            },
        ),
        migrations.CreateModel(
            name='TODO',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='id')),
                ('title', models.CharField(max_length=300, verbose_name='title')),
                ('text', models.TextField(verbose_name='text')),
                ('created_add', models.DateTimeField(verbose_name='created_add')),
                ('updated_add', models.DateTimeField(verbose_name='updated_add')),
                ('is_active', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='todo_author', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='todo_project', to='ToDoapp.project', verbose_name='project')),
            ],
            options={
                'verbose_name': 'TODO',
                'db_table': 'todo',
            },
        ),
    ]
