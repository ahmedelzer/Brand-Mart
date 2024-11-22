import React from "react";
import { Col, Container, Row } from "reactstrap";
import DataCellRender from "./DataCellRender";
import { Onchange } from "./Onchange";
import { Sm } from "./Sm";
import avoidColsTypes from "./avoidColsTypes.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function FormContainer({ tableSchema, row, errorResult, returnRow }) {
  console.log("====================================");
  console.log(errorResult);
  console.log("====================================");
  const actionField = tableSchema?.dashboardFormSchemaParameters?.find(
    (e) => e.isEnable
  ).parameterField;
  //todo check if this we want const actionField = tableSchema?.dashboardFormSchemaParameters?.find(
  //todo(e) => e.isEnable && Math.max(e.indexNumber)
  //todo).parameterField;
  const onChange = new Onchange(row);
  function SetValue(param) {
    if (
      param.lookupID ||
      param.parameterType === "areaMapLongitudePoint" ||
      param.parameterType === "mapLongitudePoint"
    ) {
      return row;
    } else {
      return row[param.parameterField];
    }
  }
  //useEffect
  return (
    <div>
      {" "}
      <Container onBlur={() => returnRow(onChange.ReturnRow)}>
        <Row>
          {tableSchema?.dashboardFormSchemaParameters
            ?.filter((column) => {
              return (
                (!column.isIDField || column.lookupID) &&
                !avoidColsTypes.find(
                  (columnType) => column.parameterType === columnType
                )
              );
            })
            .map((param) => (
              <Col sm={Sm(param)} className="px-2" key={param.parameterField}>
                <DataCellRender
                  isActionField={
                    actionField === param.parameterField ? true : false
                  }
                  data={param}
                  value={SetValue(param)}
                  onChange={onChange.UpdateRow}
                  errorResult={errorResult}
                  formSchemaParameters={
                    tableSchema?.dashboardFormSchemaParameters
                  }
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
export default FormContainer;
