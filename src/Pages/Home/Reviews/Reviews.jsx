import React from "react";
import ReviewCart from "./ReviewCart";

export default function Reviews() {
  const fakeReviews = [
    {
      text: "Amazing product! Totally worth it.",
      name: "Alice Johnson",
      profession: "Software Engineer",
      //   photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      text: "The team was very professional and helpful.",
      name: "Bob Smith",
      profession: "Product Manager",
      //   photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      text: "Loved the quality and quick response!",
      name: "Clara Lee",
      profession: "Designer",
      //   photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      text: "Amazing service! I highly recommend them.",
      name: "Alice Johnson",
      profession: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      text: "The product quality is outstanding.",
      name: "Bob Smith",
      profession: "Product Manager",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      text: "Quick response and excellent support!",
      name: "Clara Lee",
      profession: "Designer",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      text: "Truly satisfied with the experience.",
      name: "David Brown",
      profession: "Marketing Specialist",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      text: "Highly professional and reliable team.",
      name: "Ella White",
      profession: "Entrepreneur",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      text: "Exceeded my expectations in every way.",
      name: "Frank Miller",
      profession: "Consultant",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      text: "I love the attention to detail.",
      name: "Grace Wilson",
      profession: "UX Designer",
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      text: "Fast delivery and excellent service.",
      name: "Henry Davis",
      profession: "Project Manager",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      text: "Fantastic experience, will use again!",
      name: "Isla Thompson",
      profession: "Photographer",
      photo: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      text: "Professional team, great communication.",
      name: "Jack Martinez",
      profession: "Business Analyst",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">Customer Reviews</h2>
      <ReviewCart reviews={fakeReviews} slidesToShow={3} />
    </div>
  );
}
