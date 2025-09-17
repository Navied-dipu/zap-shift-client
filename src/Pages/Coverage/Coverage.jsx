import React from "react";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router-dom";

export default function Coverage() {
    const warehouses=useLoaderData()
    console.log(warehouses)
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl text-black font-bold mb-6">
          We are available in{" "}
          <span className="text-black">64 districts</span>
        </h2>

        {/* Search Box */}
        {/* <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search district..."
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div> */}
        <CoverageMap warehouses={warehouses}></CoverageMap>
      </div>
    </div>
  );
}
