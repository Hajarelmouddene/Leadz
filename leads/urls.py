from rest_framework.routers import DefaultRouter
from .views import LeadViewSet

router = DefaultRouter()
router.register('api/lead', LeadViewSet, 'leads')
urlpatterns = router.urls