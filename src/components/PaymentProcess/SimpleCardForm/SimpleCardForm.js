import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button style={{width:'100px', border:'2px solid blue'}} className="btn-brand mt-4 mb-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess &&  <p style={{color:'green'}}>Payment Successful</p>
            }
        </div>

    );
};
export default SimpleCardForm;