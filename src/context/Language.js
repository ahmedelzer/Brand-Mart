import React, { useState, createContext, useEffect } from "react";
import { json } from "react-router-dom";
import staticLocalization from "./staticLocalization.json";
//context
export const LanguageContext = createContext();

const Language = ({ children }) => {
  const [Lan, setLan] = useState(window.localStorage.getItem("language"));
  const [Right, setRight] = useState(
    window.localStorage.getItem("right") === "true" || false
  );

  const [localization, setLocalization] = useState(staticLocalization);
  const [routes, setRoutes] = useState([
    { title: "Home", route: "/", id: 1 },
    // { title: "Portfolio", route: "/portfolio", id: 2 },
    { title: "About us", route: "/about", id: 3 },
    { title: "Services", route: "/services", id: 4 },
    { title: "Contact us", route: "/contact", id: 5 },
  ]);
  useEffect(() => {
    const updatedRoutes = routes.map((route) => {
      const match = localization.routes.find((r) => r.id === route.id);
      return match ? { ...route, title: match.title } : route;
    });

    setRoutes(updatedRoutes);
  }, [localization]);
  return (
    <LanguageContext.Provider
      value={{
        Lan,
        setLan,
        Right,
        setRight,
        routes,
        localization,
        setLocalization,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
