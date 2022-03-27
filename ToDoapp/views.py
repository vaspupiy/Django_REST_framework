from django.shortcuts import render
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

from ToDoapp.models import Project, TODO
from ToDoapp.serializers import ProjectModelSerializer, TODOModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    permission_classes = [permissions.IsAuthenticated]


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
