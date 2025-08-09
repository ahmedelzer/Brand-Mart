import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { buildApiUrl } from "../hooks/APIsFunctions/BuildApiUrl";
import LoadData from "../hooks/APIsFunctions/loadData";
import { SetReoute } from "../request";
import HomeMainContentsSchemaActions from "../Schemas/HomeSchema/HomeMainContentsSchemaActions.json";
import { getRemoteRows } from "./Pagination/getRemoteRows";
import { initialState } from "./Pagination/initialState";
import reducer from "./Pagination/reducer";
import keys from "../Schemas/Keys.json";
import { createRowCache } from "@devexpress/dx-react-grid";
import { updateRows } from "./Pagination/updateRows";
import MainContent from "./MainContent";
import Loading from "./Loading/Loading";
import { listObserverStyle } from "./styles";
import { LanguageContext } from "../context/Language";
const VIRTUAL_PAGE_SIZE = 10;

export default function MainContentSection() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState(VIRTUAL_PAGE_SIZE, keys.homeMainContentsKey)
  );
  const [currentSkip, setCurrentSkip] = useState(1);
  // const [key, setKey] = useState(1);
  const observerRef = useRef();
  const dataSourceAPI = (query, skip, take) => {
    SetReoute("BrandingMart");
    return buildApiUrl(query, {
      pageIndex: skip + 1,
      pageSize: take,
      //   ServiceCategoryID: serviceCategoryID,
    });
  };
  const cache = createRowCache(VIRTUAL_PAGE_SIZE);
  const getAction =
    HomeMainContentsSchemaActions &&
    HomeMainContentsSchemaActions.find(
      (action) => action.dashboardFormActionMethodType === "Get"
    );

  const { rows, skip, totalCount, loading } = state;
  const observerCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      console.log("====================================");
      console.log(rows.length, totalCount, rows.length < totalCount, "loading");
      console.log("====================================");
      if (entry.isIntersecting && rows.length < totalCount && !loading) {
        getRemoteRows(currentSkip, VIRTUAL_PAGE_SIZE * 2, dispatch);
        setCurrentSkip(currentSkip + 1);
      }
    },
    [rows, totalCount, loading, skip]
  );
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
    <div>
      {state.rows &&
        state.rows?.map((mainContent, index) => (
          <MainContent
            files={mainContent.postWithDisplayFiles.displayFiles}
            postTitle={mainContent?.postWithDisplayFiles.post.postTitle}
            description={mainContent?.postWithDisplayFiles.post.postDescription}
            playList={true}
            portfolio={false}
            key={index}
            index={index}
          />
        ))}
      {/* {rows && (
        <div ref={observerRef} className={listObserverStyle.container} />
      )} */}
      {state.loading && <Loading />}
    </div>
  );
}
