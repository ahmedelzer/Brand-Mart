import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { LanguageContext } from "../context/Language";
import { buildApiUrl } from "../hooks/APIsFunctions/BuildApiUrl";
import LoadData from "../hooks/APIsFunctions/loadData";
import { SetReoute } from "../request";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";
import serviceSchemaActions from "../Schemas/ServiceSchema/ServiceSchemaActions.json";
import BrandService from "./BrandService";
import BrandServiceCategory from "./BrandServiceCategory";
import PageHeading from "./PageHeading";
import { getRemoteRows } from "./Pagination/getRemoteRows";
import { initialState } from "./Pagination/initialState";
import reducer from "./Pagination/reducer";
import { listObserverStyle, serviceStyles } from "./styles";
import keys from "../Schemas/Keys.json";
import { createRowCache } from "@devexpress/dx-react-grid";
import DotsLoading from "./Loading/DotsLoading";
import { updateRows } from "./Pagination/updateRows";
const VIRTUAL_PAGE_SIZE = 2;
function Service({ categories, serviceCategoryID, setServiceCategoryID }) {
  const { localization } = useContext(LanguageContext);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(VIRTUAL_PAGE_SIZE, keys.serviceKey)
  );
  const [currentSkip, setCurrentSkip] = useState(1);
  const observerRef = useRef();
  const dataSourceAPI = (query, skip, take) => {
    SetReoute(serviceSchema.projectProxyRoute);
    return buildApiUrl(query, {
      pageIndex: skip + 1,
      pageSize: take,
      ServiceCategoryID: serviceCategoryID,
    });
  };
  const cache = createRowCache(VIRTUAL_PAGE_SIZE);
  const getAction =
    serviceSchemaActions &&
    serviceSchemaActions.find(
      (action) => action.dashboardFormActionMethodType === "Get"
    );

  const { rows, skip, totalCount, loading } = state;
  const observerCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && rows.length < totalCount && !loading) {
        getRemoteRows(currentSkip, VIRTUAL_PAGE_SIZE * 2, dispatch);
        setCurrentSkip(currentSkip + 1);
      }
    },
    [rows, totalCount, loading, skip]
  );
  useEffect(() => {
    // Reset the state when serviceCategoryID changes
    dispatch({ type: "RESET_SERVICE_LIST" }); // Reset services
    setCurrentSkip(1); // Reset pagination
  }, [serviceCategoryID]); // Re-fetch data when serviceCategoryID changes
  useEffect(() => {
    LoadData(
      state,
      dataSourceAPI,
      getAction,
      cache,
      updateRows(dispatch, cache, state),
      dispatch
    );
  });
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerCallback]);
  return (
    <section className={serviceStyles.container}>
      <div className={serviceStyles.container}>
        <div className={serviceStyles.heading}>
          <PageHeading
            subTitle={localization.services.PageHeading.subTitle}
            title={localization.services.PageHeading.title}
            desc={localization.services.PageHeading.desc}
          />
        </div>
        <div className={serviceStyles.categoryWrapper}>
          <BrandServiceCategory
            categories={categories}
            serviceCategoryID={serviceCategoryID}
            setServiceCategoryID={setServiceCategoryID}
          />
        </div>
        <div className={serviceStyles.serviceWrapper}>
          {rows.map((service) => (
            <BrandService
              key={service.serviceID}
              name={service.serviceName}
              desc={service.serviceDescription}
              img={service.ServiceImage}
              serviceID={service.serviceID}
            />
          ))}
        </div>
        {rows && (
          <div ref={observerRef} className={listObserverStyle.container} />
        )}
        {loading && (
          <div className="text-center">
            <DotsLoading />
          </div>
        )}
      </div>
    </section>
  );
}

export default Service;
