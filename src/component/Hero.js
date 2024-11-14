import React, { useContext } from "react";
import { heroStyles } from "./styles";
import { LanguageContext } from "../context/Language";

function Hero() {
  const { localization } = useContext(LanguageContext);

  return (
    <div className={heroStyles.landing}>
      <div className={heroStyles.overlay}></div>
      <div className={heroStyles.text}>
        {/* <div className={heroStyles.content}>
          <h2>
            {localization.landing.content.title}
            <br />
            {localization.landing.content.shortDescription}
          </h2>
          <p>{localization.landing.content.longDescription}</p>
        </div> */}
        {/* <ul className={heroStyles.bullets}>
          <li className={heroStyles.bulletOne}></li>
          <li className={heroStyles.bulletTwoActive}></li>
          <li className={heroStyles.bulletThree}></li>
        </ul> */}
      </div>
      {/* <i class="fas fa-angle-left change-background fa-2x"></i>
      <i class="fas fa-angle-right change-background fa-2x"></i> */}
    </div>
  );
}

export default Hero;
