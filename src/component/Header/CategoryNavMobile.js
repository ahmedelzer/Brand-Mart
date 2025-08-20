import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
//link
import { Link } from "react-router-dom";
import { categoryNavMobileStyles } from "./style";
import { LanguageContext } from "../../context/Language";
import LanguageSelector from "./LanguageSelector";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { localization, routes } = useContext(LanguageContext);

  return (
    <div className={categoryNavMobileStyles.container}>
      <div
        onClick={() => setCatNavMobile(false)}
        className={categoryNavMobileStyles.closeButtonWrapper}
      >
        <FiX className={categoryNavMobileStyles.closeButtonIcon} />
      </div>
      <div className={categoryNavMobileStyles.linkWrapper}>
        {routes?.map((item) => (
          <Link
            key={item.id} // Add a unique key
            to={item.route}
            title={item.title}
            className={categoryNavMobileStyles.link}
            onClick={() => setCatNavMobile(false)}
          >
            {item.title}
          </Link>
        ))}
        <div>
          <label className="uppercase mb-1">Language</label>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default CategoryNavMobile;
