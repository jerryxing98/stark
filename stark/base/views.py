# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.views.generic.base import View


class HelloView(View):
    def get(self,request):
        return HttpResponse('HelloWorld')

helloView = HelloView.as_view()
