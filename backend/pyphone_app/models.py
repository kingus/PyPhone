from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.


class ExerciseType(models.Model):
    exercise_type = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.exercise_type


class Course (models.Model):
    course_name = models.CharField(max_length=200, null=False)
    level = models.IntegerField(null=False)

    def __str__(self):
        return self.course_name


class Exercise(models.Model):
    question = models.CharField(max_length=350, null=False)
    possible_answers = models.CharField(max_length=600, null=False)
    correct_answer = models.CharField(max_length=100, null=False)
    # task_type = models.OneToOneField(
    #     ExerciseType, on_delete=models.CASCADE, default=None)
    # task_type = models.CharField(max_length=350, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.question


class UsersCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    active = models.BooleanField()

    def __str__(self):
        return str(self.user) + " - " + str(self.course)
