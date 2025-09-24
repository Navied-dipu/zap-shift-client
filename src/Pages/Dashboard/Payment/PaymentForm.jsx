import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Contexts/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Contexts/hooks/useAuth";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const {user}=useAuth()
  const [error, setError] = useState("");
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: parcelsInfo = [] } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isPending) {
    return "....loading";
  }
  console.log(parcelsInfo);
  const amount = parcelsInfo.cost;
  const amountInCents = amount * 100;
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
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    // create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
      parcelId,
    });
    const clientSecret = res.data.clientSecret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details:{
          name:user.displayName,
          email:user.email
        }
      },
    });
    if (paymentResult.error) {
      // setError(paymentResult.error.message);
      // setSuccess("");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        // setSuccess("Payment successful ✅");
        // setError("");
        console.log('payment success')
        console.log(paymentResult)
      }
    }
    // console.log(res);
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
          Pay ${amount}
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
