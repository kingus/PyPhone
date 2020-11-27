from django.contrib import admin
from .models import Exercise, ExerciseType, Course, UsersCourse, Profile

admin.site.register(ExerciseType)
admin.site.register(Exercise)
admin.site.register(Course)
admin.site.register(UsersCourse)
admin.site.register(Profile)
