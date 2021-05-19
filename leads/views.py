from django.shortcuts import render

from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

# View which handles GET and POST requests.

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer