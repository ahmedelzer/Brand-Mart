import React, { useState } from "react";
import BranchesByLocationMap from "../component/BranchesByLocationMap";
import TreeDependents from "../component/Form/TreeDependents";
import { AddingLookupParameter } from "../component/Form/inputs";
// import BranchesByLocationMap from "../component/BranchesByLocationMap";
// import BranchesByLocationMap from "../component/Form/BranchesByLocationMap";
// Sample branch data
const branches = [
  {
    CompanyID: 12345,
    CompanyName: "Tech Innovations Ltd.",
    AddressLocationID: 67890,
    CompanyBranchID: 54321,
    Address: "123 Business St., Silicon Valley, CA",
    LocationLatitudePoint: "37.7749",
    LocationLongitudePoint: "-122.4194",
    CompanyBranchContacts: [
      {
        CompanyBranchContactID: "b8d6c3a4-e92f-4b73-b1b2-c4f4b07805a0",
        CodeNumber: 1,
        CompanyBranchID: "54321",
        ContactTypeID: "3e23a83e-83d3-4d62-b462-bc41614f4f27",
        Contact: "john.doe@example.com",
        IsActive: true,
      },
      {
        CompanyBranchContactID: "d2595f9f-47b7-43a1-a2ff-4732ff321b7e",
        CodeNumber: 0,
        CompanyBranchID: "54321",
        ContactTypeID: "67b87d6d-6780-4b4b-b02d-b17b8dcd83e3",
        Contact: "+1234567890",
        IsActive: false,
      },
    ],
  },
  {
    CompanyID: 12346,
    AddressLocationID: 67891,
    CompanyBranchID: 54322,
    CompanyName: "Creative Solutions Inc.",
    Address: "456 Innovation Ave., San Francisco, CA",
    LocationLatitudePoint: "37.7749",
    LocationLongitudePoint: "-12.4195",
    CompanyBranchContacts: [
      {
        CompanyBranchContactID: "b8d6c3a4-e92f-4b73-b1b2-c4f4b07805a0",
        CodeNumber: 1,
        CompanyBranchID: "54321",
        ContactTypeID: "3e23a83e-83d3-4d62-b462-bc41614f4f27",
        Contact: "john.doe@example.com",
        IsActive: true,
      },
      {
        CompanyBranchContactID: "d2595f9f-47b7-43a1-a2ff-4732ff321b7e",
        CodeNumber: 0,
        CompanyBranchID: "54321",
        ContactTypeID: "67b87d6d-6780-4b4b-b02d-b17b8dcd83e3",
        Contact: "+1234567890",
        IsActive: false,
      },
    ],
  },
  // Add more branches as needed
];

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      {/* <BranchSidebar
        branches={branches}
        handleBranchClick={handleBranchClick}
      /> */}
      {/* Map Container */}
      {/* <BranchesByLocationMap branches={branches} /> */}
      {/* <TreeDependents /> */}
      <AddingLookupParameter />
    </div>
  );
};

export default App;
