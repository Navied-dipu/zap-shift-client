import React from 'react'

export default function BenefitsCard({benefit}) {
  return (
    <div className="flex  px-3  items-center bg-white shadow-xl rounded-xl p-4">
      {/* Left Side - Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={benefit.image}
          alt={benefit.heading}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Divider */}
      <div className="divider divider-horizontal  divider-error mx-4"></div>

      {/* Right Side - Text */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-[#03464D]">{benefit.heading}</h2>
        <p className="text-gray-600 text-sm mt-2">{benefit.subheading}</p>
      </div>
    </div>
  )
}
