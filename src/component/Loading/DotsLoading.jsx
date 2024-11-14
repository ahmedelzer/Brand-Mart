import React, { useContext } from "react";
import "./loadingDots.css";
import { LanguageContext } from "../../context/Language";
function DotsLoading() {
  const { localization } = useContext(LanguageContext);

  return (
    <div className="loading-dots">
      <span>{localization.loadData.loading}</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </div>
  );
}

export default DotsLoading;
