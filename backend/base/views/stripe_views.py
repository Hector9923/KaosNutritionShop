from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.shortcuts import redirect
from rest_framework.response import Response
import logging

import stripe
stripe.api_key = "sk_test_51KF3YMALEmriZRQAZJZ4wra1wcPjvwA59KpOqMtioSZe4hO9CQPegtIdwDAszHhPJprmTKvSyAUVvtrOMJCmMGVk00TZCi87ms"


@api_view(['POST'])
def CreateCheckoutSession(request):
        # try:
        # prices = stripe.Price.list(
        #     lookup_keys=[request.data['lookup_key']],
        #     expand=['data.product']
        # )

        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': request.data['lookup_key'],
                    'quantity': 1,
                },
            ],
            mode='subscription',
            success_url=request.scheme + '://' + request.get_host() +
            '?success=true&session_id={CHECKOUT_SESSION_ID}',
            cancel_url=request.scheme + '://' + request.get_host() + '?canceled=true',
        )
        return redirect(checkout_session.url, code=303)

        # except Exception as e:
        #     return Response({'error': {'message': str(e)}})



@api_view(['POST'])
def CustomerPortal(request, pk):
    data = request.data
    checkout_session_id = request.form.get('session_id')
    checkout_session = stripe.checkout.Session.retrieve(checkout_session_id)
    
    return_url="http://127.0.0.1:3000/create-checkout-session"

    portalSession = stripe.billing_portal.Session.create(
        customer=checkout_session.customer,
        return_url=return_url,
    )
    return Response(portalSession.url, code=303)