#-*- coding:utf-8 -*- 

from django.conf.urls import patterns, include, url
from django.conf import settings



urlpattern = patterns('friend.views',
	url(r'add/$','friend_add'),
	
	)


