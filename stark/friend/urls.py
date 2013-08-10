#-*- coding:utf-8 -*- 

from django.conf.urls import patterns, include, url
from django.conf import settings



urlpatterns = patterns('friend.views',
    url(r'add/$','friend_add'),
    url(r'list/(?P<loc>\w+)/(?P<ex_user>\w+)/temp/$','friend_list_page',{'template':'1'},name='friend_list_page'),
    url(r'list/(?P<loc>\w+)/temp/$','friend_list_page',{'ex_user':None,'template':'1'},name = 'friend_list_page'),
    url(r'list/(?P<loc>\w+)/$','friend_list_page',{'ex_user':None,'template':None},name = 'friend_list_page'),
    url(r'list/(?P<loc>\w+)/(?P<ex_user>\w+)/$','friend_list_page',{'template':None},name='friend_list_page'),
    url(r'invite/$','friend_invite',name='friend_invite'),
	url(r'delete/$','friend_delete',name = 'friend_delete'),
	url(r'follow/$','friend_follow',name= 'friend_follow'),
	)


