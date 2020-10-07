from rest_framework import serializers
from .models import Exercise, ExerciseType


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'
