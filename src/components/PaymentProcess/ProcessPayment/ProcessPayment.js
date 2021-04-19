import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Ie17TACB19S6AkH1QLNQlpDsVEAJsZ8NzkzptDUKKaOHXOEP7bCE1Tm3bbQiq4KoUUGCE1QhDldfSMGQcX6Jzrr0011SKlrcX');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;