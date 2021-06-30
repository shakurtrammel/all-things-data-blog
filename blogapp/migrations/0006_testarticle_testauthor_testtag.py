# Generated by Django 3.2 on 2021-06-27 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0005_auto_20210626_1920'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=70, null=True)),
                ('tldr', models.TextField(blank=True, null=True)),
                ('intro', models.TextField(blank=True, null=True)),
                ('p1_heading', models.CharField(blank=True, max_length=120, null=True)),
                ('p1', models.TextField(blank=True, null=True)),
                ('p2_heading', models.CharField(blank=True, max_length=120, null=True)),
                ('p2', models.TextField(blank=True, null=True)),
                ('p3_heading', models.CharField(blank=True, max_length=120, null=True)),
                ('p3', models.TextField(blank=True, null=True)),
                ('outro', models.TextField(blank=True, null=True)),
                ('likes', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestAuthor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(blank=True, max_length=120, null=True)),
                ('lname', models.CharField(blank=True, max_length=120, null=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=120, null=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now_add=True)),
                ('articles', models.ManyToManyField(related_name='testtags', to='blogapp.TestArticle')),
            ],
        ),
    ]
