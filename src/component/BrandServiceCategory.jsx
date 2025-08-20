import React, { useState } from "react";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { brandServiceCategoryStyles } from "./styles";
import { GetProjectUrl, SetReoute } from "../request";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";
function BrandServiceCategory({
  categories,
  serviceCategoryID,
  setServiceCategoryID,
}) {
  const [activeIndex, setActiveIndex] = useState(serviceCategoryID);
  const [des, setDes] = useState(
    categories?.dataSource[0].serviceCategoryDescription
  );
  const handleClick = (index, des) => {
    setActiveIndex(index);
    setDes(des);
    setServiceCategoryID(index); // Trigger re-fetch in Service component
  };

  return (
    <div className={brandServiceCategoryStyles.container}>
      <div className={brandServiceCategoryStyles.tabWrapper}>
        {categories?.dataSource.map((tab) => (
          <div
            key={tab.serviceCategoryID}
            className={`${brandServiceCategoryStyles.tab} ${
              activeIndex === tab.serviceCategoryID
                ? brandServiceCategoryStyles.activeTab
                : brandServiceCategoryStyles.inactiveTab
            } transition-all duration-300`}
            onClick={() =>
              handleClick(tab.serviceCategoryID, tab.serviceCategoryDescription)
            }
          >
            {tab.serviceCategoryName}
          </div>
        ))}
      </div>
      <h4 className={brandServiceCategoryStyles.description}>
        {des ? des : categories?.dataSource[0].serviceCategoryDescription}
      </h4>
    </div>
  );
}

export default BrandServiceCategory;
