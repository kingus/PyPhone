from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    xp = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user.username)


class ExerciseType(models.Model):
    exercise_type = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return str(self.id) + " " + self.exercise_type


class Course (models.Model):
    course_name = models.CharField(max_length=200, null=False)
    level = models.IntegerField(null=False)

    def __str__(self):
        return str(self.id) + " " + self.course_name


class Exercise(models.Model):
    question = models.CharField(max_length=350, null=False)
    code = models.CharField(max_length=350, null=True, blank=True)
    possible_answers = models.CharField(max_length=600, null=True)
    correct_answer = models.CharField(max_length=100, null=False)
    exercise_type = models.ForeignKey(
        ExerciseType, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, default=1)
    points = models.IntegerField(default=10,
                                 blank=False)

    def __str__(self):
        return str(self.course) + " " + self.question


class UsersCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    active = models.BooleanField()
    gainedPoints = models.FloatField(default=0)

    def __str__(self):
        return str(self.user) + " - " + str(self.course)
