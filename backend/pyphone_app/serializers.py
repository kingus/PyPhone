from rest_framework import serializers
from .models import Exercise, ExerciseType, Course, UsersCourse, Profile
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', )


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('xp',)


class ExerciseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseType
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    exercise_type = ExerciseTypeSerializer(read_only=True)

    class Meta:
        model = Exercise
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
        depth = 1


class ExerciseSerializer2(serializers.ModelSerializer):
    # course = CourseSerializer(read_only=True)
    # exercise_type = ExerciseTypeSerializer(read_only=True)

    class Meta:
        model = Exercise
        fields = ('__all__')


class UsersCourseSerializer(serializers.ModelSerializer):
    # course = serializers.StringRelatedField()
    course = CourseSerializer(read_only=True)

    class Meta:
        model = UsersCourse
        # fields = ('__all__')
        fields = ('active', 'course', 'gainedPoints')
