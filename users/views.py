from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.decorators import action
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import AllowAny, BasePermission
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.viewsets import ModelViewSet, ViewSet, GenericViewSet

from ToDoapp.serializers import TestUserSerializer
from .models import User
from .serializers import UserModelSerializer


# class UserView(
#     mixins.RetrieveModelMixin,
#     mixins.ListModelMixin,
#     mixins.UpdateModelMixin,
#     GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer
#
#
# class StaffOnly(BasePermission):
#     def has_permission(self, request, view):
#         return request.user.is_superuser
#
#
# class UserModelViewSet(
#     mixins.RetrieveModelMixin,
#     mixins.ListModelMixin,
#     mixins.UpdateModelMixin,
#     GenericViewSet
# ):
class UserModelViewSet(ModelViewSet):

    queryset = User.objects.all()
    # serializer_class = UserModelSerializer
    serializer_class = TestUserSerializer
    # permission_classes = [StaffOnly]

