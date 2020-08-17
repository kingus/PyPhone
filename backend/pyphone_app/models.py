from django.db import models

# Create your models here.


class TaskType(models.Model):
    task_type_id = models.IntegerField(primary_key=True)
    task_type = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.task_type


class Task(models.Model):
    question = models.CharField(max_length=350, null=False)
    possible_answers = models.CharField(max_length=600, null=False)
    correct_answer = models.CharField(max_length=100, null=False)
    task_type = models.OneToOneField(
        TaskType, on_delete=models.CASCADE)

    def __str__(self):
        return self.question
