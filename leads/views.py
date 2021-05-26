from django.shortcuts import render

from .models import Lead
from .serializers import LeadSerializer
from rest_framework import viewsets, permissions


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = LeadSerializer