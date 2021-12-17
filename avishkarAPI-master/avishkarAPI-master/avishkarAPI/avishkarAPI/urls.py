from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('auth/', include('authapi.urls')),
    path('event/', include('events.urls')),
    path('admin/', admin.site.urls),
]
