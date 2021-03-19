from django.db import models
from authors.models import Author

class Project(models.Model):
    name = models.CharField(max_length=30, unique=True)
    repository = models.URLField(blank=True)
    members = models.ManyToManyField(Author)

    def __str__(self):
        return self.name

class ToDo(models.Model):
    name = models.CharField(max_length=50)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
