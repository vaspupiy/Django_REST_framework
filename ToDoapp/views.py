from django.shortcuts import render
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet

from ToDoapp.filters import ProjectFilter, TODOFilter
from ToDoapp.models import Project, TODO
from ToDoapp.serializers import ProjectModelSerializer, TODOModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.filter(is_active=True)
    serializer_class = TODOModelSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
