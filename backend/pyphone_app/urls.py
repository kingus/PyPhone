from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from .views import ExerciseView, ExerciseTypeView, CourseView, UsersCourseView, ProfileView, ProfileInfo, AchievementView, UsersAchievementView, ResetCoursesView, AchievementActivity
urlpatterns = [
    # path('/login/', obtain_auth_token, name="login"),
    path('exercise/', ExerciseView.as_view(), name="exercise"),
    path('exercise-type/', ExerciseTypeView.as_view(), name="exercise-type"),
    path('course/', CourseView.as_view(), name="course"),
    path('users-course/', UsersCourseView.as_view(), name="users-course"),
    path('profile/', ProfileView.as_view(), name="users-profile"),
    path('profile-info/', ProfileInfo.as_view(), name="profile-info"),
    path('achievement/', AchievementView.as_view(), name="achievement"),
    path('reset/', ResetCoursesView.as_view(), name="reset"),
    path('users-achievement-activity/', AchievementActivity.as_view(),
         name="users-achievement-activity"),
    path('users-achievement/', UsersAchievementView.as_view(),
         name="users-achievement"),
]
