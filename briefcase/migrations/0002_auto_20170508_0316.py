# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-08 03:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('briefcase', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='github_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
