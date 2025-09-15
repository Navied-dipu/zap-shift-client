import React from 'react'

export default function ServiceCard({services}) {
  return (
    <div>
          <div className="grid gap-8 px-6 md:px-12 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-white shadow-md  transition  hover:bg-[#CAEB66] hover:shadow-xl"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="card-title text-black  text-lg font-semiboldtext-black ">
                {service.title}
              </h3>
              <p className="text-sm text-black ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
