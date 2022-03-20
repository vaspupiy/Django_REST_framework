from rest_framework.serializers import ModelSerializer, StringRelatedField, PrimaryKeyRelatedField, \
    HyperlinkedModelSerializer

from users.models import User
from .models import Project, TODO


class SimpleUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class ProjectModelSerializer(HyperlinkedModelSerializer):
    worker = StringRelatedField(many=True,)
    uid = StringRelatedField(read_only=True)

    class Meta:
        model = Project
        # exclude = ['uid']
        fields = '__all__'


class TODOModelSerializer(HyperlinkedModelSerializer):
    author = StringRelatedField()
    project = StringRelatedField()

    class Meta:
        model = TODO
        # exclude = ['uid']
        fields = '__all__'
