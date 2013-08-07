#-*- coding:utf-8 -*- 

from django.conf.urls import patterns, include, url
from django.conf import settings



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
'''
Feeds={
    'recent':RecentBookmarks,
    'user':UserBookmarks,
    'tag':TagBookmarks
}
'''

urlpatterns = patterns('bookmark.ex_views',
	url(r'search/$','bookmark_search_page'),
	#url(r'feeds/(?P<url>.*)/rss.xml$','django.contrib.syndication.views.feed',{'feed_dict':feeds}),
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

