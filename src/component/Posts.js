import { createRowCache } from "@devexpress/dx-react-grid";
import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { LanguageContext } from "../context/Language";
import { buildApiUrl } from "../hooks/APIsFunctions/BuildApiUrl";
import LoadData from "../hooks/APIsFunctions/loadData";
import { SetReoute } from "../request";
import HomePostsSchemaActions from "../Schemas/HomeSchema/HomePostsSchemaActions.json";
import keys from "../Schemas/Keys.json";
import "../slider.css";
import Card from "./Card";
import { getRemoteRows } from "./Pagination/getRemoteRows";
import { initialState } from "./Pagination/initialState";
import reducer from "./Pagination/reducer";
import { updateRows } from "./Pagination/updateRows";
import { postsStyles } from "./styles"; // Import the styles
const VIRTUAL_PAGE_SIZE = 10;

function Posts() {
  const { Right } = useContext(LanguageContext);
  const [autoplay, setAutoplay] = useState(false);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(VIRTUAL_PAGE_SIZE, keys.homeMainContentsKey)
  );
  const [currentSkip, setCurrentSkip] = useState(1);
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
    HomePostsSchemaActions &&
    HomePostsSchemaActions.find(
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
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  const dir = Right ? "rtl" : "ltr";

  return (
    <>
      <div className={postsStyles.container} id="swiper-product">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={autoplay}
          dir={dir}
          navigation={false}
          onReachEnd={(swiper) => {
            swiper.autoplay.stop();
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className={postsStyles.swiper}
        >
          {state.rows?.map((item) => (
            <SwiperSlide key={item?.postID}>
              <Card
                postTitle={item?.postWithDisplayFiles.post.postTitle}
                src={item?.postWithDisplayFiles.displayFiles}
                description={item?.postWithDisplayFiles.post.postDescription}
                moveNextCard={() => setAutoplay({ delay: 1500 })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Posts;
