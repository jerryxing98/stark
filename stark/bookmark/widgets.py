# -*- coding: utf-8 -*-
__author__ = 'a'


from django import forms
from django.utils.safestring import  mark_safe
from django.utils.encoding import force_unicode
from bookmark.models import *

class CaptchaHashKey(forms.widgets.HiddenInput):
    def render(self, name, value, attrs=None):
        return u''

class CaptchaInput(forms.widgets.TextInput):

    def __init__(self,attrs={}):

        super(CaptchaInput,self).__init__(attrs)

    '''
    重载父类的render方法，这个方法用于生成CaptchaInput
    '''
    def render(self, name, value, attrs=None):

        if value is None:
            value=''
            final_attrs = self.build_attrs(attrs,type=self.input_type,name=name)

        if value:
            final_attrs['value'] = force_unicode(value)
        #print 'value:',value
        captcha =  generate_arithmetic_captcha()
        #将描述用户注册表单中的验证码图片的html代码保存到变量img中
        #print 'captcha:',captcha
        img = '<img src="/captcha/%s.jpg" align="absbottom" />' % captcha.hashkey
        #将描述 用户 不可见表单保存在 hidden 中
        hidden = '<input type="hidden" name="captcha_hashkey" value="%s"/>' % captcha.hashkey
        #print 'img:'+img,'hidden:'+hidden

        #print mark_safe(u'%s%s<input %s/>') % (img,hidden,forms.util.flatatt(final_attrs))
        return mark_safe(u'%s%s<input %s/>') % (img,hidden,forms.util.flatatt(final_attrs))
