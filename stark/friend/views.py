#-*- coding:utf-8 -*-
from friend.forms import *
from bookmark.models import *
from django.template import RequestContext
from bookmark.forms import *
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
from account.models import MyProfile

from django.core.exceptions import ObjectDoesNotExist
from django.db.models.base import ObjectDoesNotExist
ITEMS_PER_PAGE = 5


FRIEND_MAPPING = {
'fans':lambda **kwargs: MyProfile.objects.get_fans_list(**kwargs),
'follows':lambda **kwargs:MyProfile.objects.get_follows_list(**kwargs),
'second_follows':lambda **kwargs:MyProfile.objects.get_second_follows_list(**kwargs),
'same_follows':lambda **kwargs:MyProfile.objects.get_same_follows_list(**kwargs),
}

@login_required
def friend_add(request):
    if request.GET.has_key('username'):
        friend = get_object_or_404(User,username = request.GET['username'])
        if friend.username == request.user.username:
            raise Http404
        else:
            if friend in (friendship.to_friend for friendship in request.user.friend_set.all()):
                messages.add_message(request, INFO, '用户%s已经是你的好友了,无需重复添加！' % friend.username.encode('utf-8'))
            else:
                friendship =Friendship(
                from_friend = request.user,
                to_friend = friend
                )
                friendship.save()
                messages.add_message(request,SUCCESS,'用户%s已经添加为你的好友！' % friend.username.encode('utf-8'))
            return HttpResponseRedirect(friend.get_absolute_url())
    else:
        raise Http404


@login_required
def friend_list_page(request,loc,ex_user,template):
    if template:
        template = 'friend_list_page.html'
    else:
        template = 'friend_list.html'

    is_me = False
    username = request.user.username
    
    if ex_user:
        try:
            if request.user == User.objects.get(username = ex_user):
                is_me = True
        except ObjectDoesNotExist:
            raise Http404
        result = FRIEND_MAPPING[loc](username = username,ex_username = ex_user)
    else :
        is_me = True
        result = FRIEND_MAPPING[loc](username = username)
        if len(list(result))>0:
            pass
        else:
            result = None
    return render_to_response(template,
        context_instance = RequestContext(request,
        {
         'paginate_by' : ITEMS_PER_PAGE,
         'friend_list' : result,
         'is_me' : is_me,
         'ex_username':ex_user,
        }))


@login_required
def friend_invite(request):
    if request.method == 'POST':
        form = FriendInviteForm(request.POST)
        if form.is_valid():
            invitation = Invitation(
            name = form.clean_data['name'],
            email = form.clean_data['email'],
            code = User.objects.make_random_password(20),
            sender = request.user
            )
            invitation.save()
            try:
                invitation.send()
                messages.add_message(request,SUCCESS,'你已经邀请%s为你的好友！一封邀请信已经发送到他的邮箱！' % form.clean_data['email'].encode('utf-8'))
            except:
                messages.add_message(request,ERROR,'向地址%s发送邀请信的过程发生错误，发送失败！将跳转到发送页面再次发送！' % form.clean_data['email'].encode('utf-8'))
                return HttpResponseRedirect(request.get_full_path()+'?raw=1')
    else:
        form = FriendInviteForm()
        context = RequestContext(request,{'form':form})
        template = 'friend_invite.html'
        if request.method == 'GET' and request.GET.has_key('raw'):
            raw=request.GET['raw']
            context.update({'raw':raw})
            template = 'friend_invite_form.html'
        return render_to_response(template,context_instance = context)

@log_required
def friend_delete(request):
	ex_user = request.GET['username']
	user = request.user
	if request.GET['username']:
		try:
			to_friend = User.objects.get(username = 'ex_user')
			friend_ship = FriendShip.objects.get(to_friend=to_friend,from_friend = user)
			friend_ship.delete()
			messages.add_message(request,SUCCESS,'你已经成功取消了对%s 的关注！' % ex_user)
		except:
			raise  Http404
	else:
		raise Http404

@log_request
def friend_follow(request):
	ex_user = request.GET['username']
	user = request.user
	if request.GET['username']:
		try:
			to_friend = User.objects.get(username = 'ex_user')
			friend_ship = FriendShip.objects.get(to_friend=to_friend,from_friend = user)
			friend_ship.save()
			messages.add_message(request,SUCCESS,'你已经成功对%s 进行了关注！' % ex_user)
		except:
			raise  Http404
	else:
		raise Http404
