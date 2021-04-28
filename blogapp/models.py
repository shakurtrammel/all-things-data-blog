from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    desc = models.TextField()
    mp1 = models.CharField(max_length=120)
    mp2 = models.CharField(max_length=120)
    mp3 = models.CharField(max_length=120)
    p1 = models.TextField()
    p2 = models.TextField()
    p3 = models.TextField()
    i1 = models.CharField(max_length=120)
    i2 = models.CharField(max_length=120)
    i3 = models.CharField(max_length=120)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)

    def _str_(self):
        return self.title
