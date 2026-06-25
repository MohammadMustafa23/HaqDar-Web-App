import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";

function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center, 13);
    }, [center, map]);
    return null;
}

export default function NearbyEmitraMap() {
  const [position, setPosition] = useState([26.9124, 75.7873]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("Location:", pos.coords.latitude, pos.coords.longitude);

        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.log("Location Error:", err);
      },
    );
  }, []);

  const centers = [
    {
      id: 1,
      name: "eMitra Center 1",
      position: [26.9124, 75.7873],
    },
    {
      id: 2,
      name: "eMitra Center 2",
      position: [26.918, 75.79],
    },
    {
      id: 3,
      name: "eMitra Center 3",
      position: [26.905, 75.78],
    },
  ];
return (
  <MapContainer
    center={position}
    zoom={13}
    style={{ height: "400px", width: "100%" }}
  >
    <ChangeView center={position} />

    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    <Marker position={position}>
      <Popup>Your Location</Popup>
    </Marker>

    {centers.map((center) => (
      <Marker key={center.id} position={center.position}>
        <Popup>{center.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
)}
