#-*- coding:utf-8  -*-
from django.conf.urls import patterns, include, url
from base.views import helloView
from django.conf import settings
from userena import views as userena_views
from account.forms import BsSignupForm,BsAuthenticationForm
# Uncomment the next two lines to enable the admin:

from django.contrib import admin
admin.autodiscover()



#====================================
#first start for test
#====================================
'''
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'stark.views.home', name='home'),
    # url(r'^stark/', include('stark.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^hello/$','base.views.helloView'),
    #
    )
'''
#====================================
#the account model
#====================================
urlpatterns = patterns('',
        url(r'^$','account.views.signin'),
        url(r'^admin/', include(admin.site.urls)),
        url(r'^accounts/',include('userena.urls')),
        )

#====================================
#the bookmark model
#====================================
urlpatterns += patterns('',
        url(r'^bookmark/',include('bookmark.urls')),
        )

#====================================
#
#====================================