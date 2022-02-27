from django.core.management.base import BaseCommand
from django.db.utils import IntegrityError

from users.models import User
from mimesis import Text, Person, Datetime


class Command(BaseCommand):
    help = 'Create User'

    def handle(self, *args, **options):

        # CREATE USERS
        person = Person()

        for _ in range(100):
            username_ = person.username(mask='C')
            password_ = person.password(length=8)
            print(f'Логин: {username_} / Пароль: {password_}')
            first_name_ = person.first_name()
            last_name_ = person.last_name()
            email_ = person.email()

            user = User(
                username=username_,
                email=email_,
                last_name=last_name_,
                first_name=first_name_,
            )

            user.set_password(password_)
            try:
                user.save()
            except Exception as err:
                print(f' ошибка: {err}, запись не создана')
                continue

        # Создаем суперпользователя при помощи менеджера модели
        try:
            super_user = User.objects.create_superuser('django', 'django@geekshop.local', 'geekbrains')
        except Exception as err:
            print('Занято!', err)
