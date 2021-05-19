from django.urls import path
from . import views

#Wire up LeadListCreate to api/lead
urlpatterns = [
    path('api/lead/', views.LeadListCreate.as_view())
]