import React, { useContext, useEffect, useState } from "react";
import FormContainer from "../DynamicPopup/FormContainer";
import dashboardItemSchema from "../../Schemas/DashboardItemSchema/DashboardItemSchema.json";
import { GetProjectUrl, SetReoute } from "../../request.js";
import useFetch from "../../hooks/APIsFunctions/useFetch";
import { GetActionsFromSchema } from "../../hooks/DashboardAPIs/GetActionsFromSchema";
import GetSchemaActionsUrl from "../../hooks/DashboardAPIs/GetSchemaActionsUrl";
import FormComponent from "./FormComponent";
import { Button } from "reactstrap";
import { RegistrationContext } from "../../context/Registration";
import { LanguageContext } from "../../context/Language";
// function StepButton(title){
import { drawStyle as styles } from "./styles"; // Importing the styles
// }
function DrawFrom({
  serviceRegistration,
  onSubmit,
  disable,
  prevStep,
  havePersonalInfo,
  returnInfoStep,
  result,
  isConfirm,
}) {
  const { isSigh } = useContext(RegistrationContext);
  const { localization } = useContext(LanguageContext);
  SetReoute(dashboardItemSchema.projectProxyRoute);
  const [postAction, setPostAction] = useState(null);
  const [typeSubmit, setTypeSubmit] = useState(null);
  const [route, setRoute] = useState(null);
  const { data: addDashboardItem } = useFetch(
    `/Dashboard/GetDashboardForm?DashboardMenuItemID=${serviceRegistration.addDashboardItemID}`,
    GetProjectUrl()
  );
  return (
    <form
      onSubmit={(e) => onSubmit(e, postAction, typeSubmit, route)}
      action=""
    >
      {addDashboardItem &&
        addDashboardItem.map((from) => (
          <FormComponent
            key={from.id}
            schema={from}
            setPostAction={setPostAction}
            havePersonalInfo={havePersonalInfo}
            setTypeSubmit={setTypeSubmit}
            result={result}
            setRoute={setRoute}
          />
        ))}
      <div className={styles.formContainer}>
        {isSigh ? (
          <>
            {/* <Button
              onClick={prevStep}
              type="button"
              className={styles.buttonBase}
            >
              {localization.formSteps.step.textBackButton}
            </Button> */}
            <Button
              disabled={disable}
              type="submit"
              className={styles.buttonBase}
            >
              {isConfirm
                ? localization.formSteps.step.textConfirmButton
                : localization.formSteps.step.textButton}
            </Button>
          </>
        ) : (
          <>
            {!havePersonalInfo ? (
              <Button
                type="submit"
                disabled={disable}
                className={`${styles.buttonBase} mx-2`}
              >
                {localization.formSteps.personalInfo.textButton}
              </Button>
            ) : (
              <>
                <Button
                  onClick={returnInfoStep}
                  type="button"
                  className={styles.goBackButton}
                >
                  {localization.formSteps.verification.textBackButton}
                </Button>
                <Button
                  type="submit"
                  disabled={disable}
                  className={styles.goBackButton}
                >
                  {localization.formSteps.verification.textButton}
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </form>
  );
}

export default DrawFrom;
