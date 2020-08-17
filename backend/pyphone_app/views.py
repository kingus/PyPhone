from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import TaskSerializer
from .models import Task
# Create your views here.


class TaskView(APIView):

    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response({"tasks": serializer.data})
