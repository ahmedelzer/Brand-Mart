import React from "react";
import { sectionHeadingStyles as styles } from "./styles"; // Importing the styles

const SectionHeading = ({ title, desc }) => {
  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <p className={styles.sectionDesc}>{desc}</p>
    </div>
  );
};

export default SectionHeading;
