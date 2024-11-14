import React from "react";
import { pageHeadingStyles } from "./styles"; // Import the styles

const PageHeading = ({ title, subTitle, desc }) => {
  return (
    <div className={pageHeadingStyles.container}>
      <div className={pageHeadingStyles.content}>
        <p className={pageHeadingStyles.title}>{title}</p>
        <h2 className={pageHeadingStyles.subTitle}>{subTitle}</h2>
        <p className={pageHeadingStyles.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default PageHeading;
