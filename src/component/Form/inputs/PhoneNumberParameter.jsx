import { LanguageContext } from "../../../context/Language";
import React, { useContext, useEffect, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";

const countryCodes = [
  { code: "+20", country: "EG" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  // Add more country codes as needed
];

function PhoneNumberParameter({
  value,
  fieldName,
  enable,
  onKeyPress,
  ...props
}) {
  const { Right } = useContext(LanguageContext);
  console.log("====================================");
  console.log(value == "+201067921420"); //can you set the selectedCode +20 and set input value 1067921420
  console.log("====================================");

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // Split the value into country code and phone number on mount
  useEffect(() => {
    if (value) {
      const matchingCode = countryCodes.find((item) =>
        value.startsWith(item.code)
      );
      if (matchingCode) {
        setSelectedCode(matchingCode.code);
        setPhoneNumber(value.replace(matchingCode.code, ""));
      } else {
        setPhoneNumber(value); // If no matching code, assume entire value is phone number
      }
    }
  }, [value]);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelectCode = (code) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center mt-2" dir="ltr" title={props.title}>
      <InputGroup>
        {/* <div className=" w-full"> */}
        <Button
          id="dropdown-phone-button"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-center border-[#dee2e6] bg-white !text-[#212529] text-md font-bold"
          type="button"
          onClick={toggleDropdown}
        >
          {selectedCode}{" "}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </Button>
        {showDropdown && (
          <ul className="absolute z-10 mt-1 w-fit bg-black border rounded-lg shadow-lg">
            {countryCodes.map((item) => (
              <li
                key={item.code}
                className="px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
                onClick={() => handleSelectCode(item.code)}
              >
                {item.code} {item.country}
              </li>
            ))}
          </ul>
        )}
        {/* </div> */}

        {/* <div className="relative w-full"> */}
        <Input
          type="tel"
          dir={`${Right ? "rtl" : "ltr"}`}
          className={props.className}
          name={fieldName}
          readOnly={!enable}
          defaultValue={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="phone-input"
          aria-describedby="helper-text-explanation"
          placeholder="123-456-7890"
          required
        />

        {/* </div> */}
      </InputGroup>
      {/* <input
        type="hidden"
        name={fieldName}
        value={selectedCode + phoneNumber}
        // value={phoneNumber}
      /> */}
    </div>
  );
}

export default PhoneNumberParameter;
