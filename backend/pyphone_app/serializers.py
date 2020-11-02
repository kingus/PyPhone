from rest_framework import serializers
from .models import Exercise, ExerciseType, Course, UsersCourse


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'


class ExerciseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseType
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
        depth = 1


class UsersCourseSerializer(serializers.ModelSerializer):
    # course = serializers.StringRelatedField()
    course = CourseSerializer(read_only=True)

    class Meta:
        model = UsersCourse
        # fields = ('__all__')
        fields = ('active', 'course')
