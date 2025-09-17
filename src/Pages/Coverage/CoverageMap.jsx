import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CoverageMap({ warehouses }) {
  const position = [23.685, 90.3563]; // Center of Bangladesh

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={position} // Fixed: use 'center' instead of 'position'
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                warehouses.map((houses, index)=> 
                
                <Marker key={index} position={[houses.latitude , houses.longitude]}>
              <Popup>We are available in Bangladesh</Popup>
            </Marker>)
            }
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
