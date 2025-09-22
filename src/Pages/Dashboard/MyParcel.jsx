import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Contexts/hooks/useAuth";
import useAxiosSecure from "../../Contexts/hooks/useAxiosSecure";

export default function MyParcel() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);
  return (
    <div>
      <h2>My parcel coming here : {parcels.length}</h2>
    </div>
  );
}
