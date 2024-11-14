import { useEffect, useState } from "react";
import DatepickerComponent from "./inputs/DatepickerComponent";
// import "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js";
const FormField = ({
  name,
  label,
  placeholder,
  onChangeYourInfo,
  value,
  isEmpty,
  type,
  setInfo,
}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#000]");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block");
      setRedBorder("border-[#ed3548]");
    }
    // console.log(displayRequired);
    // console.log(isEmpty);
  }, [isEmpty]);
  function TypeHandle() {
    switch (type) {
      case "text":
        return (
          <input
            onChange={handleChange}
            // name={name}
            name="input"
            className={`font-medium w-full mt-1 p-2 pl-3 border rounded ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
            type="text"
            // placeholder={"sdd"}
            placeholder={placeholder}
            // value={value}
          />
        );
      case "date":
        return <DatepickerComponent name={name} setInfo={setInfo} />;
      case "switch":
        return (
          <div className="flex flex-wrap p-2">
            <div className="flex items-center me-4">
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-4 h-4  bg-gray-100  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="red-radio"
                className="ms-2 text-sm font-medium mx-2 text-gray-900 dark:text-gray-300"
              >
                Male
              </label>
              <input
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-4 h-4  bg-gray-100  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="red-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
          </div>
        );
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <label className=" text-body">{label}</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          This field is required
        </p>
      </div>
      <div>
        {/* <DatepickerComponent /> */}
        {TypeHandle()}
        {/* <input
          onChange={onChangeYourInfo}
          name={name}
          className={`font-medium w-full mt-1 p-2 pl-3  rounded-lg border-1 ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
          type="text"
          // placeholder={"sdd"}
          placeholder={placeholder}
          value={value}
        /> */}
      </div>
      {/* {data.map((input) => (
        <RenderInputField
          key={input.title}
          input={input}
          info={info}
          setInfo={setInfo}
        />
      ))} */}
    </div>
  );
};

export default FormField;
