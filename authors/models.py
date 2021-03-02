from django.db import models

class Author(models.Model):
    username = models.CharField(max_length=30)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.name
