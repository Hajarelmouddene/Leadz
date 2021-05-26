from rest_framework import serializers
from .models import Lead

#Creating serializer from lead model
class LeadSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Lead
        fields = ('id', 'name', 'email', 'message')
