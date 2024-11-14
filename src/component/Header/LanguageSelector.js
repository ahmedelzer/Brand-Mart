import React, { useContext, useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { languageSelectorStyles } from "./style";
import { GetProjectUrl, SetHeaders, SetReoute } from "../../request";
import { buildApiUrl } from "../../hooks/APIsFunctions/BuildApiUrl";
import UseFetchWithoutBaseUrl from "../../hooks/APIsFunctions/UseFetchWithoutBaseUrl";
import schemaLanguages from "../../Schemas/LanguageSchema/LanguageSchema.json";
import LanguageSchemaActions from "../../Schemas/LanguageSchema/LanguageSchemaActions.json";
import LocalizationSchemaActions from "../../Schemas/Localization/LocalizationSchemaActions.json";
import { LanguageContext } from "../../context/Language";
import staticLocalization from "../../context/staticLocalization.json";
import { DeepMerge } from "./deepMerge";

import useFetch from "../../hooks/APIsFunctions/useFetch";
const LanguageSelector = () => {
  const [selectedLanguage, SetSelectedLanguage] = useState(null); // or an appropriate default value
  SetReoute(schemaLanguages.projectProxyRoute);
  const dataSourceAPI = (query) =>
    buildApiUrl(query, {
      pageIndex: 1,
      pageSize: 1000,
      activeStatus: 1,
    });
  const getAction =
    LanguageSchemaActions &&
    LanguageSchemaActions.find(
      (action) => action.dashboardFormActionMethodType === "Get"
    );
  const query = dataSourceAPI(getAction);
  const { data } = UseFetchWithoutBaseUrl(query);
  const { setRight, setLocalization, setLan, Right, Lan } =
    useContext(LanguageContext);

  useEffect(() => {
    if (!Lan || Right === null || !window.localStorage.getItem("languageID")) {
      const shortName = data?.dataSource[0]?.shortName;

      const language = data?.dataSource?.find(
        (language) => language.shortName === shortName
      );
      SetSelectedLanguage(shortName);
      PrepareLanguage(shortName, language);
    } else {
      SetSelectedLanguage(window.localStorage.getItem("language")); // Set the state from localStorage
    }
  }, [data]);

  const changeLanguage = (e) => {
    const shortName = e.target.value;
    const language = data?.dataSource?.find(
      (language) => language.shortName === shortName
    );
    PrepareLanguage(shortName, language);
  };
  function PrepareLanguage(shortName, language) {
    SetSelectedLanguage(shortName);
    setLan(shortName);
    if (language) {
      window.localStorage.setItem("languageID", language.languageID);
      window.localStorage.setItem("language", shortName);
      SetHeaders();
      window.localStorage.setItem("right", language.rightDirectionEnable);
      setRight(language.rightDirectionEnable);
    }
  }
  //localization
  const getLocalizationAction = LocalizationSchemaActions?.find(
    (action) => action.dashboardFormActionMethodType === "Get"
  );

  // Using useFetch hook to fetch data
  const language = selectedLanguage || window.localStorage.getItem("language");
  const { data: localization } = useFetch(
    `/${getLocalizationAction?.routeAdderss}/${language}`,
    GetProjectUrl()
  );

  useEffect(() => {
    if (localization) {
      const localFormat = localization?.replace(
        /ObjectId\("([^"]+)"\)/g,
        '"$1"'
      );

      // Parse the formatted string into a JavaScript object
      const dataObject = JSON.parse(localFormat);
      delete dataObject._id;
      const marge = DeepMerge(staticLocalization, dataObject);
      setLocalization(marge);

      window.localStorage.setItem("localization", JSON.stringify(marge));
    }
  }, [localization, setLocalization]);

  return (
    <form className={languageSelectorStyles.form}>
      <fieldset className={languageSelectorStyles.fieldset}>
        {/* <label htmlFor="language" className={languageSelectorStyles.label}>
          Language
        </label> */}
        <div className={languageSelectorStyles.relative}>
          <select
            id="language"
            name="language"
            className={languageSelectorStyles.select}
            value={language} // Set the selected language here
            onChange={changeLanguage}
          >
            {data?.dataSource?.map((name) => (
              <option
                value={name.shortName}
                key={name.shortName}
                className={languageSelectorStyles.option}
              >
                {name.shortName}
              </option>
            ))}
            {/* <option value="en" className={languageSelectorStyles.option}>
              English
            </option>
            <option value="fr" className={languageSelectorStyles.option}>
              French
            </option>
            <option value="de" className={languageSelectorStyles.option}>
              German
            </option>
            <option value="ja" className={languageSelectorStyles.option}>
              Japanese
            </option>
            <option value="es" className={languageSelectorStyles.option}>
              Spanish
            </option> */}
          </select>
          <div className={languageSelectorStyles.svgContainer}>
            <svg
              className={languageSelectorStyles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default LanguageSelector;
