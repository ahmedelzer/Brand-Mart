import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log("====================================");
  console.log(isChecked);
  console.log("====================================");

  return (
    <label className="flex items-center cursor-pointer select-none text-dark text-white">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-dark-3">
          <span className={`${isChecked ? "" : "opacity-0"}`}>
            <FaCheck className=" text-accent w-full h-full" />
          </span>
        </div>
      </div>
      Checkbox Text
    </label>
  );
};

export default CheckBox;
