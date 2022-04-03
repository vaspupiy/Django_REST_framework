from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.decorators import action
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.viewsets import ModelViewSet, ViewSet, GenericViewSet
from .models import User
from .serializers import UserModelSerializer


# class UserView(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer


# class UserModelViewSet(ModelViewSet):
class UserModelViewSet(
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    GenericViewSet
):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

