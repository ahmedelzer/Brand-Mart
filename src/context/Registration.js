import React, { useState, createContext, useEffect } from "react";
import { json } from "react-router-dom";
import useTimer from "../hooks/APIsFunctions/useTimer";

//context
export const RegistrationContext = createContext();

const Registration = ({ children }) => {
  const [isSigh, setIsSigh] = useState(
    // window.sessionStorage.getItem("isSigh") === "true" || false
    false
  );
  const [personalInfo, setPersonalInfo] = useState({});
  // Reset function to set values back to their initial states
  const resetValues = () => {
    setIsSigh(false);
    setPersonalInfo({});
  };

  // Use the timer hook with a 15-minute delay and the reset callback
  // useTimer(isSigh ? 15 : null, resetValues); // Timer only activates when isSigh is true

  return (
    <RegistrationContext.Provider
      value={{
        isSigh,
        setIsSigh,
        personalInfo,
        setPersonalInfo,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default Registration;
