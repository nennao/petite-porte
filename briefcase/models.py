# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone


# Create your models here.

class Entry(models.Model):
    """
    describes the entries into the portfolio database
    """

    title = models.CharField(max_length=255)
    description = models.TextField()
    lang_main = models.CharField(max_length=255)
    lang_all = models.TextField()
    image_url = models.CharField(max_length=255)  # height:width ratio 60%
    port_url = models.CharField(max_length=255)
    site_url = models.CharField(max_length=255)
    github_url = models.CharField(max_length=255, blank=True, null=True)
    importance = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=timezone.now)

    # suitable colours for github banner
    cat_col1 = models.CharField(max_length=127, default='#989898')
    cat_col2 = models.CharField(max_length=127, default='#ffffff')

    def __unicode__(self):
        return self.title
