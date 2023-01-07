from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters
from webapi.models import *
from webapi.serializer import *

# Create your views here.
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
