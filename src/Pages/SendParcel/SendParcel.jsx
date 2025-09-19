import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import useAuth from "../../Contexts/hooks/useAuth";

export default function SendParcel() {
  const wareHouses = useLoaderData();
  const { register, handleSubmit, watch } = useForm();
  const type = watch("type");
  const {user}=useAuth()
  // console.log(user)
  // Sender state
  const [senderRegion, setSenderRegion] = useState("");
  const [senderWarehouses, setSenderWarehouses] = useState([]);

  // Receiver state
  const [receiverRegion, setReceiverRegion] = useState("");
  const [receiverWarehouses, setReceiverWarehouses] = useState([]);

  // Unique region list
  const uniqueRegions = [...new Set(wareHouses.map((r) => r.region))];

  // Handlers
  const handleSenderRegionChange = (region) => {
    setSenderRegion(region);
    setSenderWarehouses(wareHouses.filter((r) => r.region === region));
  };

  const handleReceiverRegionChange = (region) => {
    setReceiverRegion(region);
    setReceiverWarehouses(wareHouses.filter((r) => r.region === region));
  };
  // cost calculation
  const calculateCost = (data) => {
    let cost = 0;
    const isSameDistrict = data.sender_region === data.receiver_region;

    if (data.type === "document") {
      // Documents
      cost = isSameDistrict ? 60 : 80;
    } else {
      // Non-Documents
      const weight = Number(data.weight) || 0;

      if (weight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        // More than 3kg
        const extraKg = weight - 3;
        cost = isSameDistrict ? 110 + extraKg * 40 : 150 + extraKg * 40 + 40; // +40 extra for outside district
      }
    }

    return cost;
  };
  const generateParcelId = () => {
    return "P-" + Date.now().toString(36).toUpperCase(); // Example: P-MBEF1KJ2
  };
  const onSubmit = (data) => {
    const cost = calculateCost(data);
    const isSameDistrict = data.sender_region === data.receiver_region;
    const parcelId = generateParcelId();
    const bookingTime = new Date().toLocaleString();
    Swal.fire({
      title: "Confirm Parcel Booking",
      html: `
      <div style="text-align:left">
        <p><strong>Parcel Type:</strong> ${data.type}</p>
        <p><strong>Parcel Name:</strong> ${data.title}</p>
        <p><strong>Weight:</strong> ${data.weight || "N/A"} kg</p>
        <p><strong>Sender:</strong> ${data.sender_name} (${
        data.sender_region
      })</p>
        <p><strong>Receiver:</strong> ${data.receiver_name} (${
        data.receiver_region
      })</p>
        <hr />
        <p style="font-size:16px; font-weight:bold; color:#2563eb">
          Delivery Cost: ${cost}৳ (${
        isSameDistrict ? "Within District" : "Outside District"
      })
        </p>
      </div>
    `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "✅ Confirm",
      cancelButtonText: "❌ Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        const savedData = {
          ...data,
          sender_email: user?.email,
          cost,
          parcelId,
          bookingTime,
          creation_date: new Date().toISOString(),
        };

        console.log(savedData);
        // Simulate saving
        Swal.fire({
          title: "Saving...",
          text: "Please wait while we confirm your booking.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        setTimeout(() => {
          console.log({ ...data, cost, creation_date: new Date() });
          Swal.fire("✅ Success!", "Parcel booking confirmed.", "success");
        }, 1500);
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 shadow rounded-lg">
      {/* Toast Container */}

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-1">Enter your parcel details</h2>
      <p className="text-sm mb-6 text-gray-600">
        Please provide all required parcel details
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-4">
          <div>
            <label className="label font-semibold">Parcel Type</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  {...register("type", { required: true })}
                  className="radio radio-primary"
                  defaultChecked
                />
                <span>Document</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="non-document"
                  {...register("type", { required: true })}
                  className="radio radio-primary"
                />
                <span>Non-Document</span>
              </label>
            </div>
          </div>

          {/* Parcel Title */}
          <div>
            <label className="label font-semibold">Parcel Name</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Parcel Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Weight (only if non-document) */}
          {type === "non-document" && (
            <div>
              <label className="label font-semibold">Parcel Weight (Kg)</label>
              <input
                type="number"
                step="0.1"
                {...register("weight")}
                placeholder="Parcel Weight (Kg)"
                className="input input-bordered w-full"
              />
            </div>
          )}
        </div>

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sender */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Sender Details</h3>
            <label>Sender Name</label>
            <input
              type="text"
              placeholder="Sender Name"
              {...register("sender_name", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Sender Contact No"
              {...register("sender_contact", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Address"
              {...register("sender_address", { required: true })}
              className="input input-bordered w-full"
            />

            {/* Region Dropdown */}
            <label className="block font-medium">Select Region</label>
            <select
              className="select select-bordered w-full mb-4"
              {...register("sender_region", { required: true })}
              value={senderRegion}
              onChange={(e) => handleSenderRegionChange(e.target.value)}
            >
              <option value="">-- Select Region --</option>
              {uniqueRegions.map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
              {/* Warehouse Dropdown */}
            </select>
            <label className="block font-medium">Select Warehouse</label>
            <select
              className="select select-bordered w-full"
              {...register("sender_warehouse", { required: true })}
            >
              <option value="">-- Select Warehouse --</option>
              {senderWarehouses.map((wh, idx) => (
                <option key={idx} value={wh.city}>
                  {wh.city}
                </option>
              ))}
            </select>

            <textarea
              placeholder="Pickup Instruction"
              {...register("pickup_instruction")}
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Receiver */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Receiver Details</h3>
            <label>Receiver Name</label>
            <input
              type="text"
              placeholder="Receiver Name"
              {...register("receiver_name", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Receiver Contact No"
              {...register("receiver_contact", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Receiver Address"
              {...register("receiver_address", { required: true })}
              className="input input-bordered w-full"
            />
            {/* Region Dropdown */}
            <label className="block font-medium">Select Region</label>
            <select
              className="select select-bordered w-full mb-4"
              {...register("receiver_region", { required: true })}
              value={receiverRegion}
              onChange={(e) => handleReceiverRegionChange(e.target.value)}
            >
              <option value="">-- Select Region --</option>
              {uniqueRegions.map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
              {/* Warehouse Dropdown */}
            </select>
            <label className="block font-medium">Select Warehouse</label>
            <select
              className="select select-bordered w-full"
              {...register("receiver_warehouse", { required: true })}
            >
              <option value="">-- Select Warehouse --</option>
              {receiverWarehouses.map((wh, idx) => (
                <option key={idx} value={wh.city}>
                  {wh.city}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Delivery Instruction"
              {...register("delivery_instruction")}
              className="textarea textarea-bordered w-full"
            />
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500">* PickUp Time 4pm - 7pm Approx.</p>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary text-black w-full md:w-auto"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
}
