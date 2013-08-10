# __*__ coding:utf-8 __*__

__author__ = 'a'

from django import template
from django.template.defaultfilters import stringfilter
from bookmark.models import Bookmark
#用该标签建立用户自定义的标签和过滤器
register = template.Library()

@stringfilter
@register.filter
def truncatehz(value,arg):
    try:
        value=unicode(value,'utf8')
        x=int(arg)
        if len(value)>x:
            return value[:x]+'...'
        return value
    except:
        return value



class SaveCountNode(template.Node):
    def __init__(self,context_var_name,var_name):
        self.object_id=None
        self.context_var_name = context_var_name
        self.var_name = var_name

    def render(self,context):

        self.object_id = template.resolve_variable(self.context_var_name,context)
        '''
        统计引用了相同链接地址的书签数量，然后将其存在在目录变量context中
        '''
        context[self.var_name]=Bookmark.objects.filter(link_id=self.object_id).count()

        return ''


'''
定义标签get_save_count的同名编译函数
'''
@register.tag
def get_save_count(parser,token):
    tokens=token.contents.split()

    if len(tokens)!=4:
        raise template.TemplateSyntaxError, "标签'%r' 需要至少四个参数" % tokens[0]
    if tokens[2]!='as':
        raise template.TemplateSyntaxError,"标签 '%r' 第三个参数必须为as" % tokens[2]
    return SaveCountNode(tokens[1],tokens[3])

