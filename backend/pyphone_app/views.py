from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ExerciseSerializer, ExerciseTypeSerializer, CourseSerializer
from .models import Exercise, ExerciseType, Course
# Create your views here.


class ExerciseView(APIView):

    def get(self, request):
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return Response({"exercises": serializer.data})

    def post(self, request):
        exercise = request.data.get('exercise')
        serializer = ExerciseSerializer(data=exercise)
        if serializer.is_valid(raise_exception=True):
            saved_exercise = serializer.save()
            return Response({"success": "Exercise '{}' created successfully".format(saved_exercise.question)})
        return Response(serializer.errors)


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
            return Response({"success": "Exercise type '{}' created successfully".format(saved_exercise_type.exercise_type)})
        return Response(serializer.errors)


class CourseView(APIView):

    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response({"courses": serializer.data})

    def post(self, request):
        courses = request.data.get('course')
        serializer = CourseSerializer(data=courses)
        if serializer.is_valid(raise_exception=True):
            saved_course = serializer.save()
            return Response({"success": "Course '{}' created successfully".format(saved_course.course_name)})
        return Response(serializer.errors)
