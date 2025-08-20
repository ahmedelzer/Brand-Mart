//todo
// 1 make stuff by Schema//done
// 2 make style of about us info in the center//done
// 3 add Language componet and icon arrow for retuen to the prev page in the form page and sigh out
// 4 make tree by key target//done
// 5 if you have time add the skalton loding
//6 solve the problem of the useTimer cause component get rerendered every time because usestate is udpated
//7 display error message when person
import React, { useState, createContext, useEffect } from "react";
import { json } from "react-router-dom";
import useTimer from "../hooks/APIsFunctions/useTimer";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { GetProjectUrl, SetReoute } from "../request";

//context
export const ContactContext = createContext();

const Contact = ({ children }) => {
  const [branches, setBranches] = useState([]);
  SetReoute("BrandingMartProjectAccounting");
  const { data, isLoading, error } = useFetch(
    "/Company/GetFullCompanyBranchesInfo",
    GetProjectUrl()
  );
  useEffect(() => {
    if (!isLoading && data) {
      setBranches(data);
    }
  });


  let masterBranch = branches.length > 0 ? branches[0] : null;
  return (
    <ContactContext.Provider
      value={{
        branches,
        masterBranch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default Contact;
