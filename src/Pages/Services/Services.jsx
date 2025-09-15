import {
  FaTruck,
  FaGlobe,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: <FaTruck className="text-5xl text-primary" />,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: <FaGlobe className="text-5xl text-primary" />,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <FaBoxes className="text-5xl text-primary" />,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaMoneyBillWave className="text-5xl text-primary" />,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FaBuilding className="text-5xl text-primary" />,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaUndo className="text-5xl text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-[#03373D] rounded-2xl">
      {/* Heading & Subheading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Our Services
        </h2>
        <p className="mt-2 text-base-content/70 max-w-2xl mx-auto">
          We provide reliable and flexible logistics solutions across Bangladesh
          to support your business growth.
        </p>
      </div>

      {/* Services Grid */}
      <ServiceCard
      services={services}
      ></ServiceCard>
    </section>
  );
}
