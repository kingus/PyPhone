from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ExerciseSerializer
from .models import Exercise
# Create your views here.


class ExerciseView(APIView):

    def get(self, request):
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return Response({"exercises": serializer.data})
