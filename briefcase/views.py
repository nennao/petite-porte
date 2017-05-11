# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Entry
from django.shortcuts import render, get_object_or_404


# Create your views here.

def post_grid(request):
    """
    return all the portfolio entry objects to display in grid 
    """
    entries = Entry.objects.order_by('title')
    return render(request, 'postgrid.html', {"entries": entries})


def post_detail(request, p_url):
    """
    Create a view that return a single
    portfolio entry object based on the post url
    and render it to the 'postdetail.html'
    template. Or return a 404 error if the
    post is not found. 
    Then proceed to get the urls for the prev and next pages in portfolio
    """
    all_entries = Entry.objects.filter(display=True)
    entry = get_object_or_404(all_entries, port_url=p_url)
    entry.views += 1
    entry.save()

    entries = all_entries.order_by('title')
    entry_urls = []
    for url in entries:
        entry_urls.append(url.port_url)

    i = entry_urls.index(p_url)
    if i == 0:
        prev_page = None
    else:
        prev_page = entry_urls[i - 1]

    if i == len(entry_urls)-1:
        next_page = None
    else:
        next_page = entry_urls[i + 1]

    return render(request, "postdetail.html", {'entry': entry, 'prev_page': prev_page, 'next_page': next_page})

