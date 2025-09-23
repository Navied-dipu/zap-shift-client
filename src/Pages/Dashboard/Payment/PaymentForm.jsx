import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError ] = useState('');
  const{parcelId}=useParams()
  console.log('parcel id',parcelId)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError('');
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white  shadow-lg rounded-xl space-y-4"
      >
        <CardElement className="p-2 border text-black rounded"></CardElement>{" "}
        <button
          className="btn btn-primary text-black w-full"
          type="submit"
          disabled={!stripe}
        >
          Pay for parcel pickup
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
