FROM python:3
USER root

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN apt-get install -y vim less
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install django
RUN pip install psycopg2
RUN pip install djangorestframework
RUN pip install django-filter 
RUN pip install django-cors-headers

COPY ./api/django_api /app/
WORKDIR /app
# 以下、できてない（Dockerfileをbuildするタイミングでは"db"コンテナは起動してないので、migrateでエラーとなる
# ```
# 0 0.564 psycopg2.OperationalError: could not translate host name "db" to address: Name or service not known
# ```
# RUN python manage.py migrate
RUN python manage.py runserver 0.0.0.0:8080