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
from django.db.models.query import EmptyQuerySet

ITEMS_PER_PAGE = 5

def bookmark_search_page(request):
	bookmarks = EmptyQuerySet()
	search_type = ''
	query = ''
	show_results = False
	
	if request.GET.has_key('search_type') and request.GET.has_key('query'):
		search_type = request.GET['search_type']
		query = request.GET['query'].strip()
		show_results = True
		form = BookmarkSearchForm({'search_type':search_type,'query':query})

		if search_type and query:
			if search_type =='tag':
				bookmarks = Bookmark.objects.filter(tag__name__icontains = query)
			elif search_type == 'user':
				bookmarks = Bookmark.objects.filter(user__username__icontains = query)
			elif search_type == 'bookmark':
				bookmarks = Bookmark.objects.filter(title__icontains = query)
			else:
				pass

			if request.user.username:
				bookmarks = bookmarks.filter(Q(user = request.user)|Q(shared = True))
			else:
				bookmarks = bookmarks.filter(shared = True)
	else:
		form = BookmarkSearchForm()
	return render_to_response(
	'bookmark_search_page.html',
	context_instance = RequestContext(request,{
		'search_type':search_type,
		'query':query,
		'form':form,
		'show_user':True,
		'bookmark_list':bookmarks,
		'paginate_by' : ITEMS_PER_PAGE,
		'show_results' : show_results,
	})
	)

