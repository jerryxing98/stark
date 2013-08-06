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
Feeds={
    'recent':RecentBookmarks,
    'user':UserBookmarks,
    'tag':TagBookmarks
}


urlpatterns = patterns('bookmark.views',
	#
	#
	url(r'$',BookMarkList.as_view(),name='bookmark_list'),
	url(r'post/$','bookmarks.views.bookmark_post_page'),
    url(r'edit/(\d+)/$','bookmarks.views.bookmark_edit_page'),
    url(r'copy/(\d+)/$','bookmarks.views.bookmark_copy_page'),
    url(r'delete/$','bookmarks.views.bookmark_delete'),
	url(r'savecount/(\d+)/$','bookmarks.views.bookmark_savecount_page'),
	url(r'users/(?P<username>\w+)/$',BookMarkUserList.as_view()),
    url(r'tag/(?P<tag_id>\w+)/$',BookMarkTagList.as_view()),
    url(r'bookmark/(?P<bookmark_id>\d+)/$','bookmarks.views.bookmark_comment_page'),
)

