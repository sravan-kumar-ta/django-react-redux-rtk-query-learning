"""
https://docs.djangoproject.com/en/5.0/topics/http/urls/
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import ProjectView

route = routers.DefaultRouter()
route.register("", ProjectView, basename='projectview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
