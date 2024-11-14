import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../slider.css";
import Card from "./Card";
import Cookies from "js-cookie";
import i18next from "i18next";
import { postsStyles } from "./styles"; // Import the styles
import { LanguageContext } from "../context/Language";

function Posts({ data }) {
  const { Right } = useContext(LanguageContext);
  const [autoplay, setAutoplay] = useState(false);
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
          {data?.dataSource.map((item) => (
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
