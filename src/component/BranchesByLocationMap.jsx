import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GetIconContact } from "./GetIconContact";
// Fix for Leaflet marker icons not showing correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BranchesByLocationMap = ({ branches }) => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const handleMapClick = (e, branch) => {
    setSelectedBranch(branch);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        // Disabled this functionality for unchangeable markers
      },
    });
    return null;
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <MapContainer
        center={
          branches.length > 0
            ? [
                +branches[0].LocationLatitudePoint,
                +branches[0].LocationLongitudePoint,
              ]
            : [30.032957707631663, 31.2599301782983]
        }
        zoom={3}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        {branches.map((branch) => (
          <Marker
            key={branch.CompanyBranchID}
            position={[
              +branch.LocationLatitudePoint,
              +branch.LocationLongitudePoint,
            ]}
            eventHandlers={{
              click: (e) => handleMapClick(e, branch),
            }}
            color={"red"}
          >
            <Popup>
              <div>
                <h3>{selectedBranch.CompanyName}</h3>
                <p>{selectedBranch.Address}</p>
                {selectedBranch.CompanyBranchContacts.map((contact) => (
                  <p className="flex">
                    {GetIconContact(contact.CodeNumber, 20)}
                    <p className="!mx-1 m-0 !p-0">{contact.Contact}</p>
                  </p>
                ))}
                {/* <p>{selectedBranch.phone}</p>
              <p>{selectedBranch.email}</p>
              <p>{selectedBranch.hours}</p> */}
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${selectedBranch.LocationLatitudePoint},${selectedBranch.LocationLongitudePoint}`,
                      "_blank"
                    )
                  }
                  className="btn btn-accent !capitalize"
                >
                  Open in Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BranchesByLocationMap;
