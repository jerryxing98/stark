#__*__ coding:utf-8  __*__
from bookmark.models import Tag,Bookmark
from django.contrib.auth.models import User
from django.contrib.syndication.views import Feed
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime,timedelta
class RecentBookmarks(Feed):
	description_template = 'feeds/recent_description.html'
	link = '/bookmark/feeds/recent/'
	title = 'JerryMind|所有用户近3天提交(收藏)的共享书签' 
	description = 'JerryMind|所有用户近3天提交(收藏)的共享书签'
	def title(self):
		return title
	def link(self):
		return link
	def description(self):
		return description

	def items(self):
		today = datetime.today().date()
		return Bookmark.objects.filter(date__gt = today-timedelta(3),shared = True).order_by('-date')


class UserBookmarks(Feed):
	description_template = 'feeds/user_description.html'

	def get_object(selt,request,id):
		if not id:
			raise ObjectDoesNotExist
		return User.objects.get(id = id)
	def link(self,obj):
		return '/bookmark/feeds/user/%s/' % obj.id
	def title(self,obj):
		t = '所有用户%s近3天提交(收藏)的共享书签' % obj.username.encode('utf-8')
		return t
	def description(sef,obj):
		d= '所有用户%s近3天提交(收藏)的共享书签' % obj.username.encode('utf-8')
		return d
	def items(self,obj):
		today = datetime.today().date()
		return obj.bookmark_set.filter(date__gt = today-timedelta(3),shared = True).order_by('-date')

class TagBookmarks(Feed):
	description_template = 'feeds/tag_description.html' 

	def get_object(self,request,id):
		if id == '':
			raise ObjectDoesNotExist
		return Tag.objects.get(id = id)
	def title(self,obj):
		return 'JerryMind|用户近3天在标签"%s"下提交(收藏)的共享书签' % obj.name.encode('utf-8')
	def link(self,obj):
		return '/bookmark/feeds/tag/%s/' % obj.id
	def description(sef,obj):
		d= 'JerryMind|用户近3天在标签"%s"下提交(收藏)的共享书签' % obj.name.encode('utf-8')
		return d
	def items(self,obj):
		today = datetime.today().date()
		return obj.bookmark_set.filter(date__gt = today-timedelta(3),shared = True).order_by('-date')





