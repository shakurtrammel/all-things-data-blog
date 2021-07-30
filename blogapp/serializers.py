from rest_framework import serializers
from .models import *


class TestArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestArticle
        fields = (
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