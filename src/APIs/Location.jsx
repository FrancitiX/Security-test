import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const center = { lat: 20.483486490629733, lng: -103.53321372220348 };
const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error cargando mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  );
}

