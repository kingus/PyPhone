from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from pyphone_app.models import Profile, Course, UsersCourse
from rest_framework import status
from rest_framework.views import APIView
from .serializers import CreateUserSerializer
import datetime

todaysDate = datetime.datetime.now()


class CreateUserAPIView(CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        # We create a token than will be used for future auth
        token = Token.objects.create(user=serializer.instance)
        profile = Profile.objects.create(
            user=serializer.instance, avatar=request.data['avatar'])
        courses = Course.objects.all()
        for course in courses:
            print(course.course_name)
            if course.course_name:
                userCourses = UsersCourse.objects.create(
                    user=serializer.instance, course=course, active=True)
            else:
                userCourses = UsersCourse.objects.create(
                    user=serializer.instance, course=course, active=False)

        token_data = {"token": token.key}
        return Response(
            {**serializer.data, **token_data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )
