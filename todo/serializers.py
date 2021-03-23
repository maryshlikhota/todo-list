from rest_framework import serializers
from .models import Project, ToDo
from authors.serializers import AuthorModelSerializer

class ProjectModelSerializer(serializers.ModelSerializer):
    members = AuthorModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'

class ToDoModelSerializer(serializers.ModelSerializer):
    project = ProjectModelSerializer()
    author = AuthorModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
