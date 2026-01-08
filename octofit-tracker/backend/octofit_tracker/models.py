# User model
from django.db import models

class User(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField(unique=True)
	team = models.CharField(max_length=50)
	is_superhero = models.BooleanField(default=False)

class Team(models.Model):
	name = models.CharField(max_length=100, unique=True)
	description = models.TextField(blank=True)

class Activity(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	activity_type = models.CharField(max_length=100)
	duration_minutes = models.PositiveIntegerField()
	date = models.DateField()

class Leaderboard(models.Model):
	team = models.ForeignKey(Team, on_delete=models.CASCADE)
	total_points = models.PositiveIntegerField(default=0)

class Workout(models.Model):
	name = models.CharField(max_length=100)
	description = models.TextField(blank=True)
	suggested_for = models.CharField(max_length=100)

	def __str__(self):
		return self.name
---
mode: agent
model: GPT-4.1
---

# Django App Updates

- All Django project files are in the `octofit-tracker/backend/octofit_tracker` directory.

1. Update `settings.py` for MongoDB connection and CORS.
2. Update `models.py`, `serializers.py`, `urls.py`, `views.py`, `tests.py`, and `admin.py` to support users, teams, activities, leaderboard, and workouts collections.
3. Ensure `/` points to the api and `api_root` is present in `urls.py`.
