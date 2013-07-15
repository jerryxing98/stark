from django.conf.urls import patterns, include, url
from base.views import helloView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'stark.views.home', name='home'),
    # url(r'^stark/', include('stark.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^hello/$','base.views.helloView'),
)

urlpatterns += patterns('',
        url(r'^acount/',include('account.urls')),
        )

urlpatterns += patterns('',
        url(r'^bookmark/',include('bookmark.urls')),
        )
