from django.contrib import admin
from .models import *


class ArticleAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'tldr',
        'intro',
        'p1_heading',
        'p1',
        'p2_heading',
        'p2',
        'p3_heading',
        'p3',
        'outro',
    )

class TestArticleAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'tldr',
        'intro',
        'p1_heading',
        'p1',
        'p2_heading',
        'p2',
        'p3_heading',
        'p3',
        'outro',
        'likes',
        'updated_at',
    )


# Register your models here.
admin.site.register(Article, ArticleAdmin)
admin.site.register(TestArticle, TestArticleAdmin)
