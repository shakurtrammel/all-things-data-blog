from django.shortcuts import HttpResponse, render
from rest_framework import viewsets
from .serializers import TestArticleSerializer
from .models import *


class TestArticleView(viewsets.ModelViewSet):
    serializer_class = TestArticleSerializer
    queryset = TestArticle.objects.all()
    

def index(request):
    article = TestArticle.objects.get(id=1)
    response = article.p1
    return HttpResponse(response)

