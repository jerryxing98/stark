#-*- coding:utf-8 -*-

from userena.forms import *
from bootstrap.forms import BootstrapMixin
from django.utils.translation import ugettext_lazy as _

class BsAuthenticationForm(AuthenticationForm, BootstrapMixin):
    def __init__(self, *args, **kw):
        super(BsAuthenticationForm, self).__init__(*args, **kw)
        self.__bootstrap__()


USERNAME_RE = r'^\S+$'
attrs_dict = {'class': 'required'}
class BsSignupForm(SignupForm, BootstrapMixin):
    username = forms.RegexField(regex=USERNAME_RE,
                                max_length=30,
                                widget=forms.TextInput(attrs=attrs_dict),
                                label=_("Username"),
                                error_messages={'invalid': _('Username must contain only letters, numbers, dots and underscores.')})
    def __init__(self, *args, **kw):
        super(BsSignupForm, self).__init__(*args, **kw)
        self.__bootstrap__()
