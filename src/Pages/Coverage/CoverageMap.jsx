import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function FlyToDistrict({ district }) {
  const map = useMap();

  useEffect(() => {
    if (district) {
      map.flyTo([district.latitude, district.longitude], 10); // zoom in
    }
  }, [district, map]);

  return null;
}
export default function CoverageMap({ warehouses, searchQuery }) {
  const position = [23.685, 90.3563]; // Center of Bangladesh
  const [foundDistrict, setFoundDistrict] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const match = warehouses.find((w) =>
        w.district.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFoundDistrict(match || null);
    } else {
      setFoundDistrict(null);
    }
  }, [searchQuery, warehouses]);
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg">
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
            {warehouses.map((houses, index) => (
              <Marker
                key={index}
                position={[houses.latitude, houses.longitude]}
              >
                <Popup autoOpen={foundDistrict?.district === houses.district}>
                  <strong>{houses.district}</strong> <br />
                  {houses.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}

            {foundDistrict && <FlyToDistrict district={foundDistrict} />}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
