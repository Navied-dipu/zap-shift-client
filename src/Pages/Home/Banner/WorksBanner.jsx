import React from "react";
import bookinglogo from "../../../assets/bookingIcon.png";
export default function WorksBanner() {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl px-6 md:px-12 lg:px-20 text-[#03373D] mb-8">How its Works</h2>
      <div className="grid gap-8 px-6 md:px-12 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* cart 1 */}
        <div className="card bg-white shadow-md  transition  hover:bg-[#CAEB66] hover:shadow-xl">
          <div className="card-body  text-left">
            <div className="mb-4">
              <img src={bookinglogo} alt="" />
            </div>
            <h3 className="card-title text-black  text-lg font-semiboldtext-black ">
              Booking Pick & Drop
            </h3>
            <p className="text-sm text-black ">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        {/* cart 2 */}
        <div className="card bg-white shadow-md  transition  hover:bg-[#CAEB66] hover:shadow-xl">
          <div className="card-body  text-left">
            <div className="mb-4">
              <img src={bookinglogo} alt="" />
            </div>
            <h3 className="card-title text-black  text-lg font-semiboldtext-black ">
              Cash On Delivery
            </h3>
            <p className="text-sm text-black ">
            From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
        {/* cart 3 */}
        <div className="card bg-white shadow-md  transition  hover:bg-[#CAEB66] hover:shadow-xl">
          <div className="card-body  text-left">
            <div className="mb-4">
              <img src={bookinglogo} alt="" />
            </div>
            <h3 className="card-title text-black  text-lg font-semiboldtext-black ">
           Delivery Hub
            </h3>
            <p className="text-sm text-black ">
             From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
        {/* cart 4 */}
        <div className="card bg-white shadow-md  transition  hover:bg-[#CAEB66] hover:shadow-xl">
          <div className="card-body  text-left">
            <div className="mb-4">
              <img src={bookinglogo} alt="" />
            </div>
            <h3 className="card-title text-black  text-lg font-semiboldtext-black ">
             Booking SME & Corporate
            </h3>
            <p className="text-sm text-black ">
           From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
