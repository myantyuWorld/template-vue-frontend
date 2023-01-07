from rest_framework import routers
from webapi.views import *

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)