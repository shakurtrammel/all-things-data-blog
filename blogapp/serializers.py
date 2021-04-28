from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
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
