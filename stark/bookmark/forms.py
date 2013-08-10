# __*__ coding:utf-8 __*__
from django import forms
import re
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from bookmark.models import *
from bookmark.widgets import *
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm

class BookmarkSearchForm(forms.Form):
	CHOICES = (
	('bookmark','书签'),
	('tag','标签'),
	('user','user'),
	)

	search_type = forms.ChoiceField(
		label = '类型',
		choices = CHOICES
	)
	query = forms.CharField(
		label = '请输入搜索内容',
		widget = forms.TextInput(attrs = {'size':32 }),
		required = True
	)


class BookmarkPostForm(forms.Form):
    url=forms.URLField(
        label='网址',
        widget=forms.TextInput(attrs={'size':64,'value':'http://'}),
        help_text='<p id="form_help">必须以http:// 或 https://</p>'
    )

    title = forms.CharField(
        label='标题',max_length=32,
        widget=forms.TextInput(attrs={'size':64}),
        help_text='<p id="form_help">长度在1-32个中英文字符之间</p>'
    )

    '''
    description=forms.Textarea()  error
    '''
    description = forms.CharField(
        label='描述'
        ,max_length=140
        ,widget=forms.Textarea(attrs={'size':100,'row':4,'cols':50}),
        help_text ='<p id="form_help">长度在1-140个中英文字符之间</p>'
    )

    '''
    bug: widget=forms.CharField(attrs={'size':64}) ,the error attrs
    '''
    tags = forms.CharField(
        label='标签',
        widget=forms.TextInput(attrs={'size':64}),
        help_text='<p id="form_help">最多可以输入15个标签，标签之间要用空格隔开，每个标签的长度在1-16个中英文字符之间。</p>'
    )

    '''
    bug: forms.boolean_check
    '''
    shared = forms.BooleanField(
        label='共享(对所有用户可见):',
        required=False
    )


    def clean_description(self):
        description = self.cleaned_data['description']
        if len(description)<=140:
            return description
        raise forms.ValidationError('书签描述信息长度不能超过140个中英文字符。')

    def  clean_tags(self):
        tags = self.cleaned_data['tags']
        taglist = tags.split()

        if len(taglist)>15:
            raise forms.ValidationError('tag最大只能在15个')

        for tag in taglist:
            if len(tag)>16:
                raise forms.ValidationError('tag 的长度在1-16个中英文字符之间')
        return tags