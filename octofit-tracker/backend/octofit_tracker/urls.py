# octofit_tracker URL Configuration

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
import os

def api_root(request):
    codespace_name = os.environ.get('CODESPACE_NAME', '')
    if codespace_name:
        base_url = f"https://{codespace_name}-8000.app.github.dev/api/"
    else:
        base_url = "/api/"
    return JsonResponse({
        'users': f'{base_url}users/',
        'teams': f'{base_url}teams/',
        'activities': f'{base_url}activities/',
        'leaderboard': f'{base_url}leaderboard/',
        'workouts': f'{base_url}workouts/',
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('octofit_tracker.api_urls')),
    path('', api_root, name='api_root'),
]
