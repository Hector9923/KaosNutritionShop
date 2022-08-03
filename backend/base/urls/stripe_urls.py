from django.urls import path
from base.views import stripe_views as views

urlpatterns = [
    path('create-portal-session', views.CustomerPortal, name='customer-portal'),
    path('create-checkout-session', views.CreateCheckoutSession, name='create-checkout-session'),
]