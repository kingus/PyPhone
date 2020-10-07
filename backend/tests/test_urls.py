from django.test import TestCase
from django.urls import reverse, resolve
from pyphone_app.views import ExerciseTypeView
from rest_framework.authtoken.models import Token
from django.test import RequestFactory
from django.test import Client
from rest_framework.test import APIRequestFactory
from django.contrib.auth.models import User
from rest_framework.test import force_authenticate


class TestUrls(TestCase):
    def setUp(self):
        self.view = ExerciseTypeView.as_view()
        self.factory = APIRequestFactory()
        self.user = User.objects.create(
            id=1,
            username="kingus"
        )

    def test_exercise_type_resolves(self):
        request = self.factory.get("/api/exercise-type/")
        force_authenticate(request, user=self.user)
        response = self.view(request)
        self.assertEqual(response.status_code, 200)
