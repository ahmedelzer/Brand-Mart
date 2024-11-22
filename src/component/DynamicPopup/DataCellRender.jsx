import React from "react";
import InputDisplay from "./InputDisplay";
import { CreateInputProps } from "./CreateInputProps";
import { GetInputComponent } from "./GetInputComponent";

export default function DataCellRender({
  data,
  errorResult,
  onChange,
  value,
  ...props
}) {
  // Determine the key to use for input mapping
  const inputKey = data.lookupID ? "lookup" : data.parameterType;
  const InputComponentClass = GetInputComponent(data.parameterType);
  // Optionally instantiate the class (if needed)
  return (
    <InputDisplay
      props={{
        ...CreateInputProps(data, value),
        onChange: onChange,
        ...props,
      }}
      errorResult={errorResult}
      BaseInput={InputComponentClass}
    />
  );
}
