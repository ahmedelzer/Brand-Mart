import { LanguageContext } from "../../context/Language";
import React, { useContext, useEffect, useState } from "react";

const Step = ({ number, title, active }) => {
  const [bg, setBg] = useState("");
  const { localization } = useContext(LanguageContext);

  useEffect(() => {
    if (active) setBg("bg-[#adbeff]");
    else setBg("");
  }, [active]);

  return (
    <div className="flex text-white">
      <div
        className={`font-bold border p-2 ${bg} text-center w-10 h-10 rounded-full`}
      >
        {number}
      </div>
      <div className="hidden md:block mx-3">
        <div className="font-regular text-[#d6d9e6] text-[14px]">
          {localization.formSteps.sideNav.step} {number}
        </div>
        <div className="font-bold text-[15px] w-32 !truncate overflow-hidden whitespace-nowrap !text-ellipsis">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Step;
