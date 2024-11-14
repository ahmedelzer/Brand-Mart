import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icons not showing correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LocationMap = ({ location, onLocationChange }) => {
  // Handle map clicks to set a new location
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        onLocationChange({ latitude: lat, longitude: lng }); // Send new location to parent
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={location || [30.032957707631663, 31.2599301782983]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />
      {location && (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>Your selected location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LocationMap;
