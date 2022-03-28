from django_filters import rest_framework as filters
from .models import Project, TODO


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TODOFilter(filters.FilterSet):
    project = filters.CharFilter(field_name='project__name', lookup_expr='contains')
    created_add = filters.DateFromToRangeFilter()

    class Meta:
        model = TODO
        fields = ['project', 'created_add', ]
