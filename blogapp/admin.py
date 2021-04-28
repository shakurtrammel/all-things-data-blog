from django.contrib import admin
from .models import *


class PostAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'desc',
        'mp1',
        'mp2',
        'mp3',
        'p1',
        'p2',
        'p3',
        'i1',
        'i2',
        'i3',
    )

# Register your models here.

admin.site.register(Post, PostAdmin)
