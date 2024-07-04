import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './style/BooksCard.css';

const stripePromise = loadStripe('pk_test_51PYOfPRri35sb5mZGBzotW3nA5JUKiJrIEwhLyEue6myY9E4qPtKtuoELCdMk4GYVUQ0E2PrYu8zG5Sp5GGmagC300qfajVBQm'); // Replace with your actual publishable key

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#fff",
      padding: "10px 12px",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "22px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      margin: "50px",
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('Missing clientSecret');
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          alert('Payment successful!');
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='form-control alert' onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      {error && <div className="error mt-2">{error}</div>}
      <button className='btn btn-danger mt-2' type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing…' : `Buy Now for ₹${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

function BooksCard() {
  const { message } = useLocation().state || {};
  const props = message || {};
  const amount = props.mrp * 100; // Amount in paise

  return (
    <div className="BooksCard vh-100 container mt-5">
      <div className="ComicCard__Wrapper card bg-dark">
        <div className="ComicCard__ImageWrapper">
          <img alt={props.name} className="comic-image" src={props.url} />
        </div>
        <div className="ComicCard__Content d-flex flex-column justify-content-evenly">
          <h1 className="ComicCard__Title">{props.name}</h1>
          <div className="ComicCard__Meta">
            <p><strong>M R P:</strong> ₹{props.mrp}</p>
          </div>
          <div className="ComicCard__Description">
            <p>{props.description}</p>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
