from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from .views import ExerciseView, ExerciseTypeView
urlpatterns = [
    # path('/login/', obtain_auth_token, name="login"),
    path('exercise/', ExerciseView.as_view(), name="exercise"),
    path('exercise-type/', ExerciseTypeView.as_view(), name="exercise-type"),
]
