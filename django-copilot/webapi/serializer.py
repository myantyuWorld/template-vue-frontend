from rest_framework import serializers
from webapi.models import *

class MemberSerializer(serializers.ModelSerializer):
     class Meta:
        model = Member
        fields = ('name', 'email', 'age')