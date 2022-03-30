from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from ex import Author


class AuthorsSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=128)
    birthday_year = serializers.IntegerField()


auth = Author('Грин', 1880)

serializer = AuthorsSerializer(auth)
print(serializer.data)

render = JSONRenderer()
json_data = render.render(serializer.data)
print(json_data)
