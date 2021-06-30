from django.db import models


# Development Models.
class TestArticle(models.Model):
    title = models.CharField(max_length=70, null=True, blank=True)
    tldr = models.TextField(null=True, blank=True)
    intro = models.TextField(null=True, blank=True)
    p1_heading = models.CharField(max_length=120, null=True, blank=True)
    p1 = models.TextField(null=True, blank=True)
    p2_heading = models.CharField(max_length=120, null=True, blank=True)
    p2 = models.TextField(null=True, blank=True)
    p3_heading = models.CharField(max_length=120, null=True, blank=True)
    p3 = models.TextField(null=True, blank=True)
    outro = models.TextField(null=True, blank=True)
    likes = models.IntegerField(null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
    #tags = models.ForeignKey(Tag, related_name="articles", on_delete=models.CASCADE)
    #author = models.ForeignKey(Author, related_name="articles", on_delete=models.CASCADE)
    #comments = models.CharField(max_length=120, null=True, blank=True)

    def _str_(self):
        return self.title


class TestTag(models.Model):
    name = models.CharField(max_length=120, null=True, blank=True)
    articles = models.ManyToManyField(TestArticle, related_name="testtags")
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)


class TestAuthor(models.Model):
    fname = models.CharField(max_length=120, null=True, blank=True)
    lname = models.CharField(max_length=120, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)



 # Production Models.  
class Article(models.Model):
    title = models.CharField(max_length=70, null=True, blank=True)
    tldr = models.TextField(null=True, blank=True)
    intro = models.TextField(null=True, blank=True)
    p1_heading = models.CharField(max_length=120, null=True, blank=True)
    p1 = models.TextField(null=True, blank=True)
    p2_heading = models.CharField(max_length=120, null=True, blank=True)
    p2 = models.TextField(null=True, blank=True)
    p3_heading = models.CharField(max_length=120, null=True, blank=True)
    p3 = models.TextField(null=True, blank=True)
    outro = models.TextField(null=True, blank=True)
    likes = models.IntegerField(null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
    #tags = models.ForeignKey(Tag, related_name="articles", on_delete=models.CASCADE)
    #author = models.ForeignKey(Author, related_name="articles", on_delete=models.CASCADE)
    #comments = models.CharField(max_length=120, null=True, blank=True)

    def _str_(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(max_length=120, null=True, blank=True)
    articles = models.ManyToManyField(Article, related_name="tags")
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)


class Author(models.Model):
    fname = models.CharField(max_length=120, null=True, blank=True)
    lname = models.CharField(max_length=120, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
