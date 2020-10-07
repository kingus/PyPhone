from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ExerciseSerializer, ExerciseTypeSerializer
from .models import Exercise, ExerciseType
# Create your views here.


class ExerciseView(APIView):

    def get(self, request):
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return Response({"exercises": serializer.data})

    # def post(self, request):
    #     exercise = request.data.get('exercise')
    #     serializer = ExerciseSerializer(data=exercise)
    #     if serializer.is_valid(raise_exception=True):
    #         saved_exercise = serializer.save()
    #     return Response({"success": "Exercise '{}' created successfully".format(saved_exercise.id)})


class ExerciseTypeView(APIView):
    def get(self, request):
        exercise_types = ExerciseType.objects.all()
        serializer = ExerciseTypeSerializer(exercise_types, many=True)
        return Response({"exercise_types": serializer.data})

    def post(self, request):
        exercise_type = request.data.get('exercise_type')
        serializer = ExerciseTypeSerializer(data=exercise_type)
        if serializer.is_valid(raise_exception=True):
            saved_exercise_type = serializer.save()
        return Response({"success": "Exercise type'{}' created successfully".format(saved_exercise_type.id)})
