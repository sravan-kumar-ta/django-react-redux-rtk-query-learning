from django.db import models


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    category = models.CharField(max_length=50, blank=False, null=False)
    thumbnail = models.ImageField(upload_to='thumbnail/images', null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    demo = models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        return self.title
