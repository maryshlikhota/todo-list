from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Author
from .serializers import AuthorSerializer
from rest_framework.pagination import PageNumberPagination

class AuthorPagination(PageNumberPagination):
    page_size = 20

class AuthorViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = AuthorPagination
