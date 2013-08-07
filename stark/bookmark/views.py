# __*__	coding:utf-8 __*__
from bookmark.models import	*
from django.template import	RequestContext
from bookmark.forms	import *
from django.http import	HttpResponseRedirect
from django.http import	HttpResponseForbidden
from django.shortcuts import render_to_response
from django.shortcuts import get_object_or_404
from django.contrib	import auth
from django.http import	Http404
import cStringIO
from django.conf import	settings
from urllib2 import	urlopen
from PIL import	Image
from PIL import	ImageDraw
from PIL import	ImageFont
#from django.templatetags

from django.http import	HttpResponse
from django.contrib.auth import	login as auth_login
from django.views.decorators.cache import never_cache
from django.core.urlresolvers import reverse
from django.views.generic import list
from django.views.generic import ListView
from django.contrib.auth.decorators	import login_required
from django.db.models import Q
from django.contrib	import messages

ITEMS_PER_PAGE = 5



class BookMarkList(ListView):
	model =	Bookmark
	tags = Tag.objects._get_tag_cloud()
	ids	= Bookmark.objects.get_first_bookmark_ids_for_link()
	queryset= Bookmark.objects.filter(id__in=ids).order_by('date')
	context_object_name	= 'bookmark_list'
	paginate_by	= ITEMS_PER_PAGE
	template_name =	'main_page.html'


	def	get_context_data(self, **kwargs):
		context	= super(BookMarkList,self).get_context_data(**kwargs)
		context['tags']	= self.tags
		context['username']	= ''
		context['show_user'] = True
		return context
bookmark_list =	BookMarkList.as_view()


'''
提交用户编辑书签
1.创建link
2.创建书签
3.网站tag :	先删除该标签下所有的tag	，
'''
def	_bookmark_post(request,form,bookmark_id=None):
	link,dummy = Link.objects.get_or_create(
		url	= form.cleaned_data['url']
	)
	if bookmark_id:
		bookmark = get_object_or_404(Bookmark,id=bookmark_id)
		bookmark.link =	link
		'''	 '''
		#print '++++++++++++++++++++++++++++++++++', bookmark.tag
		bookmark.tag.clear()
	else:
		#bookmark =	Bookmark.objects.create(link=link,user=request.user)
		#print link
		user = User.objects.get(username=request.user)
		bookmark = Bookmark.objects.create(link=link,user=user)
	bookmark.title = form.cleaned_data['title']
	bookmark.description = form.cleaned_data['description']
	tag_names =	form.cleaned_data['tags'].split()
	for	tag_name in	tag_names:
		tag,dummy =	Tag.objects.get_or_create(name=tag_name)
		bookmark.tag.add(tag)
	bookmark.shared	= form.cleaned_data['shared']
	bookmark.save()
	return bookmark


'''
提交视图:
1.get: 显示
2.post:	判断该用户书签的Link,在本用户中是否存在过？
'''
@login_required
def	bookmark_post_page(request):
	page_title = '提交书签'
	
	if request.method == 'POST':
		form=BookmarkPostForm(request.POST)
		if form.is_valid():
			url	= form.cleaned_data['url']
			try:
				#bookmark=Bookmark.objects.get(link_url=url,user=request.user)
				bookmark = Bookmark.objects.get(link_url=url,user=request.user)
				#print bookmark
				msg='本书签已被你保存过，可以在这里继续编辑它'
				messages.info(request,msg)
				'''
				request.user.message_set.create(
					message='本书签已被你保存过，可以在这里继续编辑它'
				)
				'''
				#return	HttpResponseRedirect('/bookmark/edit/'+str(bookmark.id)+'/')
				return HttpResponseRedirect(reverse('bookmark_edit_page',args =	(str(bookmark.id))))
			except:
				pass
			# DAO save the information to database
		dummy =	_bookmark_post(request,form)
		#return	HttpResponseRedirect(request.user.get_absolute_url())
		return HttpResponseRedirect(reverse('bookmark_list'))
	else :
		form = BookmarkPostForm()
		variables =	RequestContext(request,{'form':form,'page_title':page_title})
		return render_to_response('bookmark_post_page.html',variables)


@login_required
def	bookmark_edit_page(request,bookmark_id):
	page_title='编辑书签'
	bookmark = get_object_or_404(Bookmark,id=bookmark_id)
	if request.method == 'POST':
		form = BookmarkPostForm(request.POST)
		if form.is_valid():
			url	= form.cleaned_data['url']
			try:
				bookmark_new = Bookmark.objects.get(link__url=url,user=request.user)
				bookmark_old = get_object_or_404(Bookmark,id=bookmark_id)
				if bookmark_new.link !=	bookmark_old.link:
					msg='此书签已被你保存过，可以在这里继续编辑它！'
					messages.info(request,msg)
					'''
					request.user.message_set.create(
						message	=  '此书签已被你保存过，可以在这里继续编辑它！'
					)
					'''
					#return	HttpResponseRedirect('/edit/'+str(bookmark_new.id)+'/')
					return HttpResponseRedirect(reverse('bookmark_edit_page'),args=str(bookmark_new.id))
			except ObjectDoesNotExist:
				pass
			dummy =	_bookmark_post(request,form,bookmark_id)
			#return	 HttpResponseRedirect(request.user.get_absolute_url())
			return HttpResponseRedirect(reverse('bookmark_user_list',args =	(request.user.username,)))
		else:
			if bookmark.user !=	request.user:
				return HttpResponseForbidden()
	url	= bookmark.link.url
	title =	bookmark.title
	description	= bookmark.description
	tags = ' '.join(tag.name for tag in	bookmark.tag.all())
	shared = bookmark.shared
	form = BookmarkPostForm(
		{
		'url':url,
		'title':title,
		'description':description,
		'tags':tags,
		'shared':shared
	})
	variables =	RequestContext(request,{'form':form,'page_title':page_title})
	return render_to_response('bookmark_post_page.html',variables)

'''
收藏用户书签
GET：显示收藏的书签，并将其他用户的书签填充
'''
@login_required
def	bookmark_copy_page(request,bookmark_id):
	page_title='收藏书签'
	if request.method == 'POST':
		form = BookmarkPostForm(request.POST)

		if form.is_valid():
			url= form.cleaned_data['url']
			user = User.objects.get(username='admin')
			try:
				bookmark_new = Bookmark.objects.get(link__url=url,user = user)
				bookmark_old = get_object_or_404(Bookmark,id=bookmark_id)
				if bookmark_new	!= bookmark_old	:
					msg='此书签已经被你保存过，可以在这继续编辑！'
					messages.info(request,msg)
					'''
					request.user.message_set.create(
						message='此书签已经被你保存过，可以在这继续编辑！'
					)
					'''
					#return	HttpResponseRedirect('/edit/'+str(bookmark_new.id)+'/')
					return HttpResponseRedirect(reverse('bookmark_edit_page',args=(str(bookmark_new.id),)))
				else:
					pass
			except ObjectDoesNotExist:
				pass
			dummy =	_bookmark_post(request,form)
			#return	HttpResponseRedirect(request.user.get_absolute_url())
			return HttpResponseRedirect(reverse('bookmark_user_list',args=(request.user.username,)))
	else :
		bookmark = get_object_or_404(Bookmark,id=bookmark_id)
		try:
			user = User.objects.get(username=request.user.username)
			bookmark=Bookmark.objects.get(link=bookmark.link,user=request.user.username)
			msg='此书签已经被你保存过,可以在这继续编辑!'
			'''
			request.user.message_set.create(
				message='此书签已经被你保存过,可以在这继续编辑!'
			)
			'''
		except:
			pass
	url	= bookmark.link.url
	title =	bookmark.title
	tags = ' '.join(tag.name for tag in	bookmark.tag.all())
	description	= bookmark.description
	shared = bookmark.shared
	#user =	User.objects.get('test2')
	form = BookmarkPostForm({
			'url':url,
			'tags':tags,
			'title':title,
			'description':description,
			'shared':shared,
		}
	)
	variables =	RequestContext(request,{'form':form,'page_title':page_title})
	return render_to_response('bookmark_post_page.html',variables)

@login_required
def	bookmark_delete(request):
	if request.GET.havs_key('bookmark_id') and request.GET.has_key('next'):
		bookmark_id	= request.GET['bookmark_id']
		next = request.GET['next']
		try:
			bookmark =Bookmark.objects.get(id=bookmark_id)
			if bookmark.user!= request.user:
				return HttpResponseForbidden()
			ctype =	ContentType.objects.get_for_model(Bookmark)
			comments = Comment.objects.filter(content_type = ctype.id,object_id=bookmark.id)
			comments.delete()
			bookmark.delete()
		except:
			raise Http404
		return HttpResponseRedirect(next)
	else:
		raise Http404


class BookMarkCountList(ListView):
	model=Bookmark
	template_name =	'bookmark_savecount_page.html'
	temp_dict =	{}


	def	get_context_data(self, **kwargs):
		context	= super(BookMarkCountList,self).get_context_data(**kwargs)
		context=context+BookMarkCountList.temp_dict
		return context
bookmark_count_list	= BookMarkCountList.as_view()


@login_required
def	bookmark_savecount_page(request,link_id):
	if request.GET.has_key('bookmark_title'):
		bookmark_title=request.GET['bookmark_title']
		link=get_object_or_404(Link,id=link_id)
		return render_to_response('bookmark_savecount_page.html',
		context_instance = RequestContext(request,{
		'bookmark_title':bookmark_title,
		'link':link,
		'show_user':True
		}))
	else:
		raise Http404




class BookMarkUserList(ListView):
	model =	Bookmark
	template_name ='user_page.html'
	context_object_name	= 'bookmark_list'
	paginate_by	= ITEMS_PER_PAGE

	def	get(self, request, *args, **kwargs):
		username=self.kwargs['username']
		user=get_object_or_404(User,username=username)
		tags=Tag.objects._get_tag_cloud(username)
		is_friend=True
		try:
			FriendShip.objects.get(
				from_friend__username=self.request.user.username,
				to_friend=user
			)
		except ObjectDoesNotExist:
			is_friend=False
		if self.request.user==user:
			is_friend =True
			bookmarks=user.bookmark_set.order_by('-date')
			page_title = u'你的书签	共 %s 个书签' %	bookmarks.count()
			show_rss=False
		else:
			bookmarks =	user.bookmark_set.filter(shared=True).order_by('-date')
			page_title=u'%s	的共享书签 共 %s 个书签' % (username,bookmarks.count())
			show_rss=True

		self.object_list=bookmarks

		temp_args={'tags':tags,'is_friend':is_friend,'page_title':page_title,'show_rss':show_rss,'show_user':False,'username':username}
		ctx=self.get_context_data(object_list=self.object_list)
		ctx.update(temp_args)
		return self.render_to_response(ctx)
		'''
		def	get_context_data(self, **kwargs):
			ctx=super(BookMarkUserList,self).get_context_data(self,**kwargs)
			return ctx
		'''
bookmark_user_list = BookMarkUserList.as_view()


def tag_page(request,tag_id):
	if request.GET.has_key('username'):
		username = request.GET['username']
		tag = get_object_or_404(Tag,id = tag_id)
		tags = Tag.objects._get_tag_cloud(username)
		if username:
			if username == request.user.username:
				content_title = '你在此标签下的书签'
				bookmarks = tag.bookmark_set.filter(user__username = username ).order_by('-date')
				show_rss = False
			else:
				user=get_object_or_404(User,username = username)
				content_title = '用户<a href=%s>%s</a> 在此书签下的共享书签' % (reverse('bookmark_user_list',args=(username,)),username)
				bookmarks = tag.bookmark_set.filter(user__username = username ).order_by('-date')
				show_rss = True
			show_user = False
		else:
			content_title = '此标签下的共享书签'
			bookmarks = tag.bookmark_set.filter(shared = True).order_by('-date')
			show_rss = True
			show_user = True
		return render_to_response('tag_page.html',
		context_instance=RequestContext(request,{
			'tag':tag,
			'tags':tags,
			'bookmark_list':bookmarks,
			'paginate_by':ITEMS_PER_PAGE,
			'username':username,
			'content_title':content_title,
			'show_rss':show_rss,
			'show_user':show_user
		}))
	else:
		raise Http404
'''
个人书签管理系统
1.显示所有的共享书签列表
2.显示所有的标签云
3.分页显示
4.列出所有的好友关系
'''
def	user_page(request,username):
	user = get_object_or_404(User,username=username)
	tags = Tag.objects._get_tag_cloud(username)
	#表明user对应的用户是不是当前登录用户的好友
	is_friend=True
	is_CurUser=False
	try:
		#主要检查该用户是不是当前用户的好友
		FriendShip.objects.get(
			from_friend__username=request.user.username,
			to_friend=user
		)
	except ObjectDoesNotExist:
		is_friend =	False

	#如果当前用户就是user对象 对应的用户
	if request.user	== user:
		is_friend =	True
		bookmarks =	user.bookmark_set.order_by('-date')
		page_title = u'你的书签（共%s 个书签）'	% bookmarks.count()
		#是否显示 RSS订阅
		show_rss = False
		is_CurUser=True
	else:
		bookmarks =	user.bookmark_set.filter(shared=True).order_by('-date')
		page_title =u'%s的共享书签（共%s 个书签）' %(username,bookmarks.count())
		show_rss = True
	temp_args={'username':username,'is_Friend':is_friend,'is_CurUser':is_CurUser,'tags':tags}
	#BookMarkUserList.temp_dict=temp_args
	#return	BookMarkUserList(username=username,is_Friend=is_friend,is_CurUser=is_CurUser,tags=tags).as_view()
	return BookMarkUserList.as_view()


def	bookmark_comment_page(request,bookmark_id):
	bookmark=get_object_or_404(Bookmark,id=bookmark_id)
	if bookmark.shared:
		variable=RequestContext(request,{'bookmark':bookmark,'show_user':True})
		return render_to_response('bookmark_comment_page.html',variable)
	else:
		return HttpResponseForbidden