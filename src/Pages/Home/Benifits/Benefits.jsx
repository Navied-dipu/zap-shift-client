import React from "react";
import BenifitsCard from "./BenefitsCard";
import BenefitsCard from "./BenefitsCard";
import tracking from '../../../assets/live-tracking.png'
import call from '../../../assets/safe-delivery.png'
// import call from '../../../assets/safe-delivery.png'

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      heading: "Live Parcel Tracking",
      subheading:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: tracking
    },
    {
      id: 2,
      heading: "100% Safe Delivery",
      subheading:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: call
    },
    {
      id: 3,
      heading: "24/7 Call Center Support",
      subheading:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image:call
    }
  ];

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {benefits.map((benefit, index) => (
        <BenefitsCard
        key={index}
        benefit={benefit}
        ></BenefitsCard>
        ))}
      </div>
    </section>
  );
}
