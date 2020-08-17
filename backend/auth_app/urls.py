from .views import CreateUserAPIView
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include

urlpatterns = [
    path('/login/', obtain_auth_token, name="login"),
    path('/register/', CreateUserAPIView.as_view(), name="register"),
]