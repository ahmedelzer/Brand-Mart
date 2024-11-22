import React, { useState, createContext, useEffect, useRef } from "react";
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

  const timerActiveRef = useRef(false); // Ref to track if the timer should run
  // Reset function to set values back to their initial states
  const resetValues = () => {
    setIsSigh(false);
    setPersonalInfo({});
    if (window.location.pathname.startsWith("/form")) {
      location.reload();
    }
    console.log("====================================");
    console.log("time out");
    console.log("====================================");
  };

  // Start the timer when `isSigh` becomes true
  useEffect(() => {
    if (isSigh) {
      timerActiveRef.current = true; // Activate the timer
    }
  }, [isSigh]);

  // Use the timer with a callback
  useTimer(15, () => {
    if (timerActiveRef.current) {
      resetValues();
    }
  });

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
