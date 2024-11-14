import React, { useContext, useEffect, useState } from "react";
import { FormGroup, Label } from "reactstrap";
import DisplayError from "./DisplayError";
import { LanguageContext } from "../../context/Language";
function InputDisplay({ props, BaseInput, errorResult }) {
  const [inputErrorResult, setInputErrorResult] = useState(null);
  const { localization } = useContext(LanguageContext);
  const [style, setStyle] = useState("");
  const [changed, setChanged] = useState(false);
  const handleChange = (e) => {
    if (!inputErrorResult) {
      setChanged(true);
    }
    if (props.onChange) {
      props.onChange(e); // Call the onChange prop if it exists
    }
    setStyle(" ");
  };
  useEffect(() => {
    if (!changed && inputErrorResult) {
      setStyle("is-invalid");
    } else {
      setStyle(" ");
    }
  }, [inputErrorResult, errorResult, changed]);
  return (
    <div>
      {props.type !== "detailsCell" && (
        <FormGroup>
          <DisplayError
            dataError={errorResult}
            parameterField={props.fieldName}
            setTitle={setInputErrorResult}
            setStyle={setStyle}
          />
          <Label for={props.fieldName} className="text-black">
            {props.title}
          </Label>
          <BaseInput
            {...props}
            onChange={handleChange}
            title={inputErrorResult ? inputErrorResult : props.title}
            placeholder={localization.inputs.base.placeholder + props.title}
            className={style}
          />
          {/* {BaseInput.render()} */}
        </FormGroup>
      )}
    </div>
  );
}
export default InputDisplay;
