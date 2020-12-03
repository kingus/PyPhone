from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ExerciseSerializer, ExerciseSerializer2, ExerciseTypeSerializer, AchievementSerializer, CourseSerializer, UsersCourseSerializer, ProfileSerializer, UsersAchievementSerializer
from .models import Exercise, ExerciseType, Course, UsersCourse, Profile, Achievement, UsersAchievement
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.db.models import Sum, Q
from django.db.models.functions import Coalesce
import datetime


class ExerciseView(APIView):

    def get(self, request):
        course_id = request.GET.get('course_id')
        print(course_id)
        exercises = Exercise.objects.filter(course=course_id)
        serializer = ExerciseSerializer(exercises, many=True)
        exercises_data = serializer.data
        xpSum = 0
        for i in exercises_data:
            dane = i['exercise_type']['exercise_type']
            i['exercise_type'] = dane

            if i['possible_answers'] is not None:
                i['possible_answers'] = i['possible_answers'].split(";")
            i['correct_answer'] = i['correct_answer'].split(";")
            if i['code'] is not None:
                i['code'] = i['code'].split(";")
            xpSum = xpSum + i['points']

        return Response({"exercises": exercises_data, "xp": xpSum})

    def post(self, request):

        exercises = request.data.get('exercises')

        for exercise in exercises:
            serializer = ExerciseSerializer2(data=exercise)
            if serializer.is_valid(raise_exception=True):
                saved_exercise = serializer.save()
            else:
                return Response(serializer.errors)

        return Response({"success": "Exercise '{}' created successfully".format(saved_exercise.question)})


class ProfileView(APIView):
    def get(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(
            key=token).user
        profile = Profile.objects.filter(user=user)
        serializer = ProfileSerializer(profile, many=True)
        return Response({"profile": serializer.data})

    def post(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(
            key=token).user
        xp = request.data.get('xp')
        course = request.data.get('course')
        unlock = request.data.get('unlock')
        profile = Profile.objects.filter(user=user)
        newXp = int(profile.get().xp) + int(xp)
        profile.update(xp=newXp)
        newDate = datetime.datetime.now()
        print(newDate)
        updat = {'gainedPoints': xp, 'finishDate': newDate}
        usersCourse = UsersCourse.objects.filter(
            user=user, course=course).update(**updat)
        if(unlock):
            usersCourseNext = UsersCourse.objects.filter(
                user=user, course=course+1).update(active=True)
        return Response({"XP saved correctly. You have " + str(newXp) + " XP."})


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

        courses_data = serializer.data
        response_data = []
        activeAmount = 0
        for i in courses_data:
            dane = i['course']
            sumXp = Exercise.objects.filter(
                course=dane['id']).aggregate((Sum('points')))['points__sum']
            if sumXp is None:
                percentage = 0
            else:
                percentage = i['gainedPoints']/sumXp*100

            dane['active'] = i['active']
            dane['percentage'] = percentage

            response_data.append(dane)

            if dane['active'] == True:
                activeAmount = activeAmount + 1
        return Response({"users_courses": response_data, "activeAmount": activeAmount})


class ProfileInfo(APIView):
    def get(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(key=token).user
        countDates = {}
        countDatesList = []
        usersCourse = UsersCourse.objects.filter(
            user=user, finishDate__year=2020, finishDate__month__in=[10, 11, 12])
        serializer = UsersCourseSerializer(usersCourse, many=True)
        for i in serializer.data:
            countDates.setdefault(i['finishDate'], 0)
            countDates[i['finishDate']] = countDates[i['finishDate']]+1
        for i in countDates:
            countDatesList.append({'date': i, 'count': countDates[i]})
        countDatesList.append({"count": 0, "date": "9999-11-29"})
        activeCourses = UsersCourse.objects.filter(
            user=user, active=True).count()
        activeCourses = activeCourses - 1
        print(activeCourses)
        achievements = UsersAchievement.objects.filter(
            user=user, active=True).count()
        todaysDate = datetime.date.today()

        profileInfo = Profile.objects.filter(
            user=user).values('xp', 'creationDate', 'avatar')
        todaysXp = UsersCourse.objects.filter(
            user=user, finishDate=todaysDate).aggregate((Sum('gainedPoints')))['gainedPoints__sum']
        print(todaysXp)
        xp = profileInfo[0]['xp']
        creationDate = profileInfo[0]['creationDate']
        avatar = profileInfo[0]['avatar']
        activeDays = (todaysDate-creationDate).days

        return Response({"username": user.username, "countDatesList": countDatesList, "activeCourses": activeCourses, "activeDays": activeDays, "achievements": achievements, "xp": xp, "todaysXp": todaysXp, "avatar": avatar})


class AchievementView(APIView):

    def get(self, request):
        achievements = Achievement.objects.all()
        serializer = AchievementSerializer(achievements, many=True)
        achievements_data = serializer.data
        return Response({"achievements": achievements_data})

    def post(self, request):

        achievements = request.data.get('achievements')

        for achievement in achievements:
            serializer = AchievementSerializer(data=achievement)
            if serializer.is_valid(raise_exception=True):
                saved_achievements = serializer.save()
            else:
                return Response(serializer.errors)

        return Response("Achievements has been created.")


class UsersAchievementView(APIView):

    def get(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(key=token).user
        achievements = UsersAchievement.objects.filter(
            user=user).order_by('?')
        serializer = UsersAchievementSerializer(achievements, many=True)
        achievements_data = serializer.data
        response = []
        for i in achievements_data:
            print(i['achievement']['achievementName'])
            response.append(
                {"achievementName": i['achievement']['achievementName'], "active": i['active'], "achievementDescription": i['achievement']['achievementDescription'], "achievementType": i['achievement']['achievementType']})
        return Response({"achievements": response})

    # def post(self, request):
    #     # check if user is going to get 100XP achievement
    #     token = request.headers['Authorization'].split(" ")[1]
    #     user = Token.objects.get(key=token).user
    #     xp = Profile.objects.filter(user=user).values('xp')[0]['xp']
    #     achievements = UsersAchievement.objects.filter(user=user, active=False)
    #     serializer = UsersAchievementSerializer(achievements, many=True)
    #     achievements_data = serializer.data
    #     for i in achievements_data:
    #         print(i)
    #         condition = i['achievement']['condition']
    #         achievenmentType = i['achievement']['achievementType']
    #         achievementId = i['achievement']['id']
    #         # print(achievementName)
    #         if achievenmentType == "coin":
    #             if xp > int(condition):
    #                 print(condition)
    #                 UsersAchievement.objects.filter(
    #                     user=user, achievenment_id=achievementId).update(active=True)
    #     return Response({"achievements": "response"})


class ResetCoursesView(APIView):

    def get(self, request):
        token = request.headers['Authorization'].split(" ")[1]
        user = Token.objects.get(key=token).user

        usersCourse = UsersCourse.objects.filter(
            user=user and Course.course_name != "Zmienne").update(active=0, gainedPoints=0, finishDate="9999-12-31")
        return Response("DATA RESET")
