from django.test import TestCase
from django.urls import reverse, resolve
from pyphone_app.views import ExerciseTypeView, ExerciseView
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
        self.urls = {'exercise_url': "/api/exercise/",
                     'exercise_type_url': "/api/exercise-type/"}

    # test that the URL connect to the right view
    # Django uses resolve function to match a requested URL with a list of URLs listed in the urls.py module
    def test_exercise_type_resolves(self):
        url = self.urls['exercise_type_url']
        # request = self.factory.get(url)
        # force_authenticate(request, user=self.user)
        # response = self.view(request)
        # self.assertEqual(response.status_code, 200)
        resolver = resolve(url)
        self.assertEqual(resolver.func.__name__,
                         ExerciseTypeView.as_view().__name__)

    # Django uses url() to pick the right view and generate a page
    # url()
    # url--> view name

    # when you need to go in the reverse direction and give Django the name of a view, and Django generates the appropriate url
    # reverse()
    # view name --> url

    def test_exercise_type_reverse(self):
        url1 = self.urls['exercise_type_url']
        url2 = reverse('exercise-type')
        self.assertEqual(url1, url2)

    def test_exercise_resolves(self):
        url = self.urls['exercise_url']
        resolver = resolve(url)
        self.assertEqual(resolver.func.__name__,
                         ExerciseView.as_view().__name__)

    def test_exercise_reverse(self):
        url1 = self.urls['exercise_url']
        url2 = reverse('exercise')
        self.assertEqual(url1, url2)
