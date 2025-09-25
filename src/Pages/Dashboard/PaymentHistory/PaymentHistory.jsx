import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Contexts/hooks/useAxiosSecure";
import useAuth from "../../../Contexts/hooks/useAuth";

export default function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // ✅ only fetch when email is available
  });

  if (isLoading) return <p className="text-center py-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">💳 Payment History</h2>

      {payments.length === 0 ? (
        <p className="text-center text-gray-500">No payment history found</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full border">
            <thead className="bg-primary text-gray-700">
              <tr>
                <th>#</th>
                <th>Parcel ID</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Payment Method</th>
                <th>Payment Time</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td className="whitespace-nowrap">
                    {payment.parcelId || "N/A"}
                  </td>
                  <td>${payment.amount}</td>
                  <td className="text-xs">{payment.transactionId}</td>
                  <td>{payment.paymentMethod?.join(", ")}</td>
                  <td>
                    {payment.createdAt
                      ? new Date(payment.createdAt).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
