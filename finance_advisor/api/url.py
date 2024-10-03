from .views import main, helloWorld
from django.urls import path

urlpatterns = [
    path("home/", main),
    path("world/", helloWorld)
]
