import React, { useContext } from "react";
import { comingSoonStyles } from "./styles"; // Import the styles
import { LanguageContext } from "../context/Language";

function ComingSoon() {
  const { localization } = useContext(LanguageContext);

  return (
    <div className={comingSoonStyles.container}>
      <h1 className={comingSoonStyles.title}>
        {localization.comingSoon.title}
      </h1>
      <p className={comingSoonStyles.message}>
        {localization.comingSoon.message}
      </p>
    </div>
  );
}

export default ComingSoon;
