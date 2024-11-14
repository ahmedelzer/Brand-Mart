import React, { useContext } from "react";
import { LanguageContext } from "../../context/Language";
import loadingStyles from "./loadingStyles"; // import the styles

function Loading() {
  const { localization } = useContext(LanguageContext);

  return (
    <div className={loadingStyles.container}>
      <span className={loadingStyles.srOnly}>
        {localization.loading.loading}
      </span>
      <div className={loadingStyles.bounce1}></div>
      <div className={loadingStyles.bounce2}></div>
      <div className={loadingStyles.bounce3}></div>
    </div>
  );
}

export default Loading;
