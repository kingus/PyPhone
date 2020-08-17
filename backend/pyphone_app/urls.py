from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from .views import TaskView
urlpatterns = [
    # path('/login/', obtain_auth_token, name="login"),
    path('task/', TaskView.as_view(), name="task"),
]
