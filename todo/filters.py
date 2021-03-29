from django_filters import rest_framework as filters
from django_filters.widgets import RangeWidget
from .models import Project, ToDo

class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']

class ToDoFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    project = filters.ModelChoiceFilter(queryset=Project.objects.all())
    created = filters.DateFromToRangeFilter(widget=RangeWidget(attrs={'placeholder': 'YYYY-MM-DD'}))

    class Meta:
        model = ToDo
        fields = ['name', 'project', 'created']
