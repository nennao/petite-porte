# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from skills import num_skills, my_skills


# Create your views here.

def home(request):
    skills = num_skills(my_skills)

    return render(request, 'home.html', {"skills": skills})

