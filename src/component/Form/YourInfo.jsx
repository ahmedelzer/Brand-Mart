import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";
import userInfo from "./local/user.json";
import contactInfo from "./local/contactInfo.json";
const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty, onSubmit }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    console.log(isEmpty);
  }, [isEmpty]);

  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form onSubmit={onSubmit}>
        <div className="flex flex-col space-y-6 text-[14px]">
          {userInfo.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              info={info}
              setInfo={setInfo}
              name={formField.name}
              label={formField.label}
              type={formField.type}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
          {contactInfo.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              info={info}
              setInfo={setInfo}
              name={formField.name}
              label={formField.label}
              type={formField.type}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
