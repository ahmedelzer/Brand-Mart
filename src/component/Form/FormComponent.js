import React, { useContext, useEffect } from "react";
import FormContainer from "../DynamicPopup/FormContainer";
import { GetActionsFromSchema } from "../../hooks/DashboardAPIs/GetActionsFromSchema";
import { RegistrationContext } from "../../context/Registration";
import personalInfoSchema from "./Schema/parsonalInfo.json";
import VerifyPersonSchemaAction from "../../Schemas/StepsFrom/VerifyPersonSchemaAction.json";
import CheckVerificationAndActiveCode from "../../Schemas/StepsFrom/CheckVerificationAndActiveCode.json";
import OTPForm from "./OTPForm";
import { SetReoute } from "../../request";
import { Col, Container, Row } from "reactstrap";
import { buildApiUrl } from "../../hooks/APIsFunctions/BuildApiUrl";
import UseFetchWithoutBaseUrl from "../../hooks/APIsFunctions/UseFetchWithoutBaseUrl";
import Test from "../../pages/Test";

function FormComponent({
  schema,
  setPostAction,
  havePersonalInfo,
  setTypeSubmit,
  result,
  setRoute,
  row,
}) {
  const { isSigh, customerRequestID } = useContext(RegistrationContext);
  const { postAction: postActionSteps, getAction } =
    GetActionsFromSchema(schema);
  const dataSourceAPI = (query) => {
    SetReoute(schema.projectProxyRoute);

    return buildApiUrl(query, {
      customerRequestID: customerRequestID,
    });
  };
  const query = dataSourceAPI(getAction);
  const { data, error } = UseFetchWithoutBaseUrl(query);
  setRoute(schema.projectProxyRoute);

  const selectForm = () => {
    if (!isSigh && havePersonalInfo) {
      setTypeSubmit("havePersonalInfo without Verification");
      setPostAction(CheckVerificationAndActiveCode);
      return (
        <Container>
          <Row>
            <Col>
              <OTPForm />
            </Col>
          </Row>
        </Container>
      );
    } else {
      if (isSigh) {
        setTypeSubmit("next step");
        setPostAction(postActionSteps);
      } else {
        setPostAction(VerifyPersonSchemaAction);
        setTypeSubmit("do not sigh before");
      }
      return (
        <FormContainer
          // tableSchema={personalInfoSchema}
          tableSchema={isSigh ? schema : personalInfoSchema}
          errorResult={result}
          returnRow={() => {}}
          row={row}
        />
      );
    }
  };
  return <div className="md:!mb-0 !mb-[7rem]">{selectForm()}</div>;
}

export default FormComponent;
