import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import Service from "../component/Service";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { GetProjectUrl, SetReoute } from "../request";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";
import { useParams } from "react-router-dom";
import Form from "../component/Form/Form";

function FormSteps() {
  const { serviceID } = useParams();
  SetReoute(serviceSchema.projectProxyRoute);
  const {
    data: serviceRegistrationSteps,
    isLoading,
    error,
  } = useFetch(
    `/Service/GetServiceRegistrationSteps?ServiceID=${serviceID}`,
    GetProjectUrl()
  );

  const [serviceRegistrationID, setServiceRegistrationID] = useState(
    serviceRegistrationSteps?.dataSource[0].serviceRegistrationID
  );
  useEffect(() => {
    if (serviceRegistrationSteps && serviceRegistrationID == undefined) {
      setServiceRegistrationID(
        serviceRegistrationSteps?.dataSource[0].serviceRegistrationID
      );
    }
  }, [serviceRegistrationSteps]);
  if (isLoading || !serviceRegistrationSteps) {
    return <Loading />;
  }
  if (error && !serviceRegistrationSteps) {
    // Handle error, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {serviceRegistrationSteps.count && serviceRegistrationID && (
        <Form
          serviceRegistrationSteps={serviceRegistrationSteps}
          serviceRegistrationID={serviceRegistrationID}
          setServiceRegistrationID={setServiceRegistrationID}
        />
      )}
    </div>
  );
}

export default FormSteps;
