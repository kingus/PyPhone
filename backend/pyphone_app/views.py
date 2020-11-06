from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ExerciseSerializer, ExerciseTypeSerializer, CourseSerializer, UsersCourseSerializer
from .models import Exercise, ExerciseType, Course, UsersCourse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Create your views here.


class ExerciseView(APIView):

    def get(self, request):
        course_id = request.GET.get('course_id')
        print(course_id)
        exercises = Exercise.objects.filter(course=course_id)
        serializer = ExerciseSerializer(exercises, many=True)
        exercises_data = serializer.data
        for i in exercises_data:
            dane = i['exercise_type']['exercise_type']
            i['exercise_type'] = dane
            i['possible_answers'] = i['possible_answers'].split(";")
            if i['code'] is not None:
                i['code'] = i['code'].split(";")

        return Response({"exercises": exercises_data})

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


class UsersCourseView(APIView):
    def get(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(
            key=token).user
        courses = UsersCourse.objects.filter(user=user).order_by('-active')
        serializer = UsersCourseSerializer(courses, many=True)
        print(serializer.data)
        courses_data = serializer.data
        response_data = []
        for i in courses_data:
            dane = i['course']
            dane['active'] = i['active']
            response_data.append(dane)
        print("RESP", response_data)
        return Response({"users_courses": response_data})
