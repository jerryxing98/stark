# __*__ coding:utf-8 __*__
from bookmarks.models import *
from django.template import RequestContext
from bookmarks.forms import *
from django.http import HttpResponseRedirect
from django.http import HttpResponseForbidden
from django.shortcuts import render_to_response
from django.shortcuts import get_object_or_404
from django.contrib import auth
from django.http import Http404
import cStringIO
from django.conf import settings
from urllib2 import urlopen
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
#from django.templatetags

from django.http import HttpResponse
from django.contrib.auth import login as auth_login
from django.views.decorators.cache import never_cache
from django.core.urlresolvers import reverse
from django.views.generic import list
from django.views.generic import ListView
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib import messages

ITEMS_PER_PAGE=5



class BookMarkList(ListView):
    model = Bookmark
    tags=Tag.objects._get_tag_cloud()
    ids = Bookmark.objects.get_first_bookmark_ids_for_link()
    queryset= Bookmark.objects.filter(id__in=ids).order_by('date')
    context_object_name = 'bookmark_list'
    paginate_by = ITEMS_PER_PAGE
    template_name='main_page.html'


    def get_context_data(self, **kwargs):
        context = super(BookMarkList,self).get_context_data(**kwargs)
        context['tags'] = self.tags
        context['username']=''
        context['show_user']=True
        return context
bookmarklist = BookMarkList.as_view()