import React, { useState } from "react";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router-dom";

export default function Coverage() {
  const warehouses = useLoaderData();
  // console.log(warehouses);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.search.value;
    setSearchQuery(input);
  };

  return (
    <div className="py-12 bg-gray-50 rounded-3xl mb-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl text-black font-bold mb-6">
          We are available in <span className="text-black">64 districts</span>
        </h2>
        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center mb-6 gap-2"
        >
          <input
            type="text"
            name="search"
            placeholder="Search district..."
            className="px-4 py-2 border rounded-2xl bg-gray-300 text-black  w-64"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white "
          >
            Search
          </button>
        </form>
        <CoverageMap warehouses={warehouses} searchQuery ={searchQuery}></CoverageMap>
      </div>
    </div>
  );
}
