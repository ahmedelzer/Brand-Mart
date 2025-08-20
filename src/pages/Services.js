import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import Service from "../component/Service";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { GetProjectUrl, SetReoute } from "../request";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";

function Services() {
  SetReoute(serviceSchema.projectProxyRoute);
  const {
    data: categories,
    isLoading: categoriesLoading,
    error,
  } = useFetch(
    "/Service/GetServiceCategories?PageSize=100&PageNumber=1",
    GetProjectUrl()
  );

  const [serviceCategoryID, setServiceCategoryID] = useState(
    categories?.dataSource[0].serviceCategoryID
  );
  useEffect(() => {
    if (categories && serviceCategoryID == undefined) {
      setServiceCategoryID(categories.dataSource[0].serviceCategoryID);
    }
  }, [categories]);
  if (categoriesLoading || !categories) {
    return <Loading />;
  }
  if (error && !categories) {
    // Handle error, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {categories.count && serviceCategoryID && (
        <Service
          categories={categories}
          serviceCategoryID={serviceCategoryID}
          setServiceCategoryID={setServiceCategoryID}
        />
      )}
    </div>
  );
}

export default Services;
