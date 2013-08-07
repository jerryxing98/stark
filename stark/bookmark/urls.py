#-*- coding:utf-8 -*- 

from django.conf.urls import patterns, include, url
from django.conf import settings
from bookmark.feeds import *
from django.contrib.syndication.views import Feed

'''
  标签管理
  1.标签列表显示
  2.添加标签
  3.修改标签
  4.删除标签
  5.复制标签
  6.将标签分享到第三方认证平台
  7.RSS订阅
'''

feeds={
    'recent':RecentBookmarks,
    'user':UserBookmarks,
    'tag':TagBookmarks
}


urlpatterns = patterns('',
	url(r'search/$','bookmark.ex_views.bookmark_search_page'),
	url(r'feeds/recent/rss.xml$',RecentBookmarks()),
	url(r'feeds/tag/(?P<id>\d+)/rss.xml$',TagBookmarks()),
	url(r'feeds/user/(?P<id>\d+)/rss.xml$',UserBookmarks(),)
)


urlpatterns += patterns('bookmark.views',
	#
	#
	url(r'post/$','bookmark_post_page'),
    url(r'edit/(\d+)/$','bookmark_edit_page'),
    url(r'copy/(\d+)/$','bookmark_copy_page'),
    url(r'delete/$','bookmark_delete'),
	url(r'savecount/(\d+)/$','bookmark_savecount_page'),
	url(r'users/(?P<username>\w+)/$','bookmark_user_list'),
    url(r'tag/(?P<tag_id>\d+)/$','tag_page'),
    url(r'(?P<bookmark_id>\d+)/$','bookmark_comment_page'),
	url(r'$','bookmark_list'),
)

