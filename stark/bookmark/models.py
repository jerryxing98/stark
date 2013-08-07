# __*__ coding:utf-8 __*__
from pytz import timezone,tzinfo
from django.db import models
''' 导入用于访问 settings.py 中指定配置项中的setting 对象 '''
from django.conf import settings
'''  导入当前数据库所需要的连接'''
from django.db import connection
''' 该对象可以封装模板变量及其值 '''
from django.template import Context
''' 导入用于发送邮件的类 '''
from django.core.mail import send_mail
''' 导入用户模块 '''
from django.contrib.auth.models import User
''' 用户建立模板对象的方法 '''
from django.template.loader import get_template
''' 评论 '''
from django.contrib.comments.models import Comment

from django.contrib.contenttypes.models import ContentType

import hashlib

import datetime,random,time,unicodedata
import pytz
import re
from django.template.loader import render_to_string
SHA1_RE = re.compile('^[a-f0-9]{40}$')

tz = pytz.timezone(settings.TIME_ZONE)






'''
  核心数据模型
  1.链接内容
'''
class Link(models.Model):
    url =  models.URLField(
        unique=True,
        help_text='必以HTTP://，HTTPS:// 开头'
    )
    def __str__(self):
        #定义对象的字符串表示
        return self.url

    ''' 定义内部管理类，使其能被django 的后台管理  '''
    '''
    class Admin:
        pass
    '''

    ''' 指定该数据模型的一些元数据 '''
    class Meta:
        '''  '''
        verbose_name_plural = '链接信息'





'''
    标签管理器
    1.某个用户的标签tag计数
    2.
'''
class TagManager(models.Manager):
    '''
    定义一个管理者方法user_tag_count,该方法以列表形式返回与特定用户(由参数username指定)相关的每一个标签对象的引用
    次数
    '''
    def user_tag_count(self,username):
        cursor = connection.cursor()
        sql='select d.id,d.name,d.c from ( select t.id,t.name,count(*) c from book'+\
                       'mark_bookmark b,bookmark_tag t,bookmark_book'+\
                        'mark_tag bt,auth_user u where b.id=bt.bookmark_id and '+\
                        'b.user_id=u.id and t.id=bt.tag_id and u.username ="'+\
                        username+'" group by t.id order by t.name ) d order by d.c desc '

        #print sql
        cursor.execute(sql)
        result_list=[]
        for row in cursor.fetchall():
            t=self.model(id=row[0],name=row[1])
            t.count = row[2]
            result_list.append(t)
        return result_list
    
    def _get_tag_cloud(self,username=''):
        MAX_WEIGHT = 5
        MAX_LEN=15
        if username:
            #取出该用户的标签总数
            tags = self.user_tag_count(username)
        else:
            #取出所有标签,按名字进行排序
            tags = self.order_by('name')
        '''
        检查tags 是否存在被 没有bookmark引用的标签 ，
        如果存在
            删除 （删除数据库记录）
        '''
        for tag in tags:
            if tag.bookmark_set.count()==0:
                tag.delete()
        tags = Tag.objects.order_by('name')

        for tag in tags:
            tag.count=tag.bookmark_set.count()

        try:
            min_count=max_count=tags[0].count
        except IndexError:
            min_count=max_count=0

        for tag in tags:
            if tag.count>max_count:
                max_count=tag.count
            if tag.count<min_count:
                min_count=tag.count
        #得到tag被应用次数的间距
        range = float(max_count-min_count)
        if range ==0.0:
            range=1.0
        for tag in tags:
            tag.weight = int(MAX_WEIGHT*(tag.count-min_count)/range)
        return tags[:15]

'''
 1.tag 名称
'''
class Tag(models.Model):
    name=models.CharField(
        max_length=16,unique=True,
        help_text = '长度在1-16个中英文字符之间。'
    )

    '''  test '''
    objects = TagManager()

    def __str__(self):
        return self.name
    '''
    得到当前的Tag 的地址连接
    '''
    def get_absolute_url(self):
        return '/tag/%s/' % self.id

    '''
    class Admin:
        pass
    '''
    class Meta:
        verbose_name_plural='标签信息'



class BookmarkManager(models.Manager):
    '''
    1.有性能问题，需要解决
    2.按照链接，进行分组，取出最早加入的链接。组成的书签。
    '''
    def get_first_bookmark_ids_for_link(self):
        sql=' select b.id ' \
            ' from bookmark_bookmark b,(select link_id,min(date) md ' \
            ' from bookmark_bookmark' \
            ' where shared=1 group by link_id) bb ' \
            ' where b.link_id = bb.link_id and date=bb.md';
        #print sql
        cursor = connection.cursor()
        cursor.execute(sql)
        result_list=[row[0] for row in cursor.fetchall()]
        #print result_list
        return result_list


'''
1.书签的组成
标题:
链接:外键
用户:外键
标签:多对多关系
描述:
共享:
'''
class Bookmark(models.Model):
    title = models.CharField(
        max_length=32,
        help_text='长度在1-32个英文字符之间'
    )


    link=models.ForeignKey(Link)

    user=models.ForeignKey(User)

    date=models.DateTimeField(auto_now_add=True)

    tag = models.ManyToManyField(Tag)


    description=models.TextField(
        blank=True,max_length=140,
        help_text='长度在0-140个中英文字符之间'
    )

    shared=models.BooleanField(
        default=False
    )

    objects=BookmarkManager()

    def __str__(self):
        return '%s, %s' % (self.user.username,self.link.url)


    '''得到书签的地址'''
    def get_absolute_url(self):
        return '/bookmark/%s/' % self.id

    '''
    class Admin:
        list_display=('title','user','link','date')
        list_filter =('user',)
        ordering = ('title','date')
        search_fields=('title',)
    '''


    class Meta:
        verbose_name_plural='书签信息'

    '''
    返回该书签评论的总数(注意书签评论的实现)
    '''
    def get_avg_rating1(self):
        ctype = ContentType.objects.get_for_model(self)
        comments =Comment.objects.filter(content_type=ctype,object_pk=self.id)
        rating_list =[]
        rating_total = 0

        for comment in comments:
            if comment.rating1:
                rating_list.append(comment.rating1)
                rating_total+=comment.rating1
        if rating_total:
            avg = round(rating_total*1.0/len(rating_list),1)
            return avg
        else:
            return 0

'''
好友关注关系
1.from_user:外键
2.to_user:外键
'''
class FriendShip(models.Model):
    from_friend = models.ForeignKey(
        User,related_name='friend_set'
        )


    to_friend = models.ForeignKey(
        User,related_name='to_friend_set'
        )
    def __str__(self):
        return  '%s,%s' % (
            self.from_friend.username,
            self.to_friend.username
        )

    '''
    class Admin:
        pass
    '''

    class Meta:
        unique_together=(('from_friend','to_friend'),)
        verbose_name_plural='用户好友信息'



'''
邀请
邀请人姓名:
被邀请姓名:
邮件地址:
邀请文本:
'''
class Invitation(models.Model):
    name = models.CharField(
        max_length=16,
        help_text='长度在1-16个中英文字符之间'
    )

    email = models.EmailField(

    )

    code = models.CharField(
        max_length=20,
        help_text='长度必须在1-20个中英文字符之间'
    )

    sender = models.ForeignKey(User)

    def __str__(self):
        return '%s,%s' % (self.sender.username,self.email)


    '''
    class Admin:
        pass
    '''

    class Meta:
        verbose_name_plural = '邀请信息'

    '''
    发送邀请的相关关系
    '''
    def send(self):
        subject = '邀请你加入Wuxing书签系统'
        link = 'http://%s/friend/accept/%s/' (
            settings.SITE_HOST,
            self.code
        )
        template = get_template('invitation_email.html')
        context = Context({
            'name':self.name,
            'link':link,
            'sender':self.sender.username
        })

        message = template.render(context)

        send_mail(subject,message,
                  settings.DEFAULT_FROM_EMAIL,[self.email])





'''
class RegistrationManger(models.Manager):
    def actvate_user(self,activate_key):
        if SHA1_RE.search(activate_key):
            try:
                profile = self.get(activae_key=activate_key)
            except self.model.DoesNotExist:
                return None

        if not profile.activation_key_expired():
            user = profile.user
            user.is_activate = True
            user.save()
            profile.delete()
            return user
        return None


    def create_inactive_user(self,username,password,email):

        new_user = User.objects.create_user(username,email,password)
        new_user.is_activate = False
        new_user.save()
        profile = self.create_profile(new_user)
        subject = '用户注册确认邮件！'
        message = render_to_string(
            'registration/activation_email.html',
            {
                'new_user':new_user,
                'activae_key':profile.activae_key,
                'activation_days':settings.ACCOUT_ACTIVATION_DAYS,
                'site':settings.SITE_HOST
            }
        )


        send_mail(subject,message,settings.DEFAULT_FROM_EMAIL,[new_user.email])
        print 'sentmail_message:',message
        print 'sentmail_message:',new_user.email
        return new_user

    def create_profile(self,user):
        salt = hashlib.sha1(str(random.random())).hexdigest()[:5]
        activae_key = hashlib.sha1(salt+user.username).hexdigest()
        return  self.create(user=user,activae_key = activae_key)

    def remove_expired_users(self):
        for profile in self.all():
            if profile.activation_key_expired():
                user=profile.user
                if not user.is_active:
                    user.delete()
'''

'''
注册档案
1.用户: 外键
2.激活码:
'''
'''
class RegistrationProfile(models.Model):
    user = models.ForeignKey(User,unique=True)
    activae_key = models.CharField(max_length=40)

    class Admin:
        pass

    class Meta:
        verbose_name_plural='邮件激活'

    objects = RegistrationManger()

 '''
    #返回激活码过期时间
    #1.小问题，从user 模型中取出的时间，是具有时区的
    #2. 在datetime 模块中时间属性分为两种 一种有时区，一种没有时区，两者不能做运算，需要转换
    #3. 三目运算符:  1 if x<5 else 0  ,X<5 and 1 or 0
'''
    def activation_key_expired(self):
        activation_date=datetime.timedelta(days=settings.ACCOUT_ACTIVATION_DAYS)
        return self.user.date_joined+activation_date <= datetime.datetime.now(tz=tz)


class Test(models.Model):
    name = models.CharField(
        max_length='64'
    )
'''