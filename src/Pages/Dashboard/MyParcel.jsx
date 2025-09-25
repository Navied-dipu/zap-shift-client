import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Contexts/hooks/useAuth";
import useAxiosSecure from "../../Contexts/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MyParcel() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/parcels?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // important: only fetch when email exists
  });

  console.log(parcels);
  const handlePay = (id) => {
    console.log("Proceed to payment for", id);
    navigate(`/dashboard/payment/${id}`);
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this parcel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/parcels/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
            refetch(); // refresh list
          }
        } catch (err) {
          toast.error("Failed to delete parcel");
          console.error(err);
        }
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-xl font-bold mb-4">My Parcels ({parcels.length})</h2>
      <table className="table table-zebra w-full text-sm md:text-base">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td className="whitespace-nowrap">{parcel.title}</td>
              <td>
                <span
                  className={`badge ${
                    parcel.type === "document"
                      ? "badge-info"
                      : "badge-secondary"
                  }`}
                >
                  {parcel.type}
                </span>
              </td>
              <td className="whitespace-nowrap">
                {new Date(parcel.creation_date).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </td>
              <td>৳{parcel.cost}</td>
              <td>
                <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {parcel.payment_status}
                </span>
              </td>
              <td className="flex flex-col md:flex-row gap-2">
                <button className="btn btn-xs text-black md:btn-sm btn-primary">
                  View
                </button>
                {parcel.payment_status === "unpaid" && (
                  <button
                    onClick={() => handlePay(parcel._id)}
                    className="btn btn-xs text-black md:btn-sm btn-primary"
                  >
                    Pay
                  </button>
                )}
                <button
                  onClick={() => handleDelete(parcel._id)}
                  className="btn btn-xs md:btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
