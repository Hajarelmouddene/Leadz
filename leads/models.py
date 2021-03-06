from django.db import models

# Create leads model
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)