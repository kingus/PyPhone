from django.contrib import admin
from .models import Exercise, ExerciseType, Course, UsersCourse, Profile, Achievement, UsersAchievement

admin.site.register(ExerciseType)
admin.site.register(Exercise)
admin.site.register(Course)
admin.site.register(UsersCourse)
admin.site.register(Profile)
admin.site.register(Achievement)
admin.site.register(UsersAchievement)
