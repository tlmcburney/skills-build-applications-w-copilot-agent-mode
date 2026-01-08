from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserListCreateView.as_view(), name='user-list-create'),
    path('teams/', views.TeamListCreateView.as_view(), name='team-list-create'),
    path('activities/', views.ActivityListCreateView.as_view(), name='activity-list-create'),
    path('leaderboard/', views.LeaderboardListCreateView.as_view(), name='leaderboard-list-create'),
    path('workouts/', views.WorkoutListCreateView.as_view(), name='workout-list-create'),
]
