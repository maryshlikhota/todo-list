from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo
from authors.serializers import AuthorSerializer

class ProjectSerializer(ModelSerializer):
    members = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class ProjectReadSerializer(ModelSerializer):
    members = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoSerializer(ModelSerializer):
    project = ProjectSerializer(read_only=True)
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = ToDo
        fields = '__all__'

class ToDoReadSerializer(ModelSerializer):
    project = ProjectSerializer(read_only=True)
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = ToDo
        fields = '__all__'
