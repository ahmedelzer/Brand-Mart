import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../slider.css";
import Cookies from "js-cookie";
import i18next from "i18next";
import { cardStyles } from "./styles"; // Import the styles
import TypeFile from "./TypeFile";
import { defaultProjectProxyRouteWithoutAPI } from "../request";
import { LanguageContext } from "../context/Language";

function Card({ postTitle, description, src, moveNextCard }) {
  const { Right } = useContext(LanguageContext);
  const [autoplay, setAutoplay] = useState({});
  const [allMediaPlayed, setAllMediaPlayed] = useState(false); // Track if all files are played
  const [isSEnded, setIsSEnded] = useState(false);
  const dir = Right ? "rtl" : "ltr";

  const [type, setType] = useState("image");
  const [position, setPosition] = useState(false);
  const swiperRef = useRef(null); // Ref to control swiper instance

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.realIndex];
    const currentType = currentSlide.getAttribute("data-type");
    setType(currentType);

    // if (currentType === "video") {
    //   // swiper.autoplay.stop(); // Stop autoplay for videos
    //   // swiper.autoplay.start();
    //   // setAutoplay({ delay: 1500 });
    // } else {
    //   setAutoplay({ delay: 1500 }); // Resume autoplay for images
    //   swiper.autoplay.start();
    // }
  };
  // Function to handle when the video ends
  const handleVideoEnd = () => {
    setIsSEnded(true);
  };

  window.onscroll = function () {
    const swiper = document.querySelector("#swiper-product");
    if (window.scrollY >= swiper?.offsetTop - 500) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };

  useEffect(() => {
    if (position && (isSEnded || type === "image")) {
      console.log("====================================");
      console.log(position, isSEnded, type);
      console.log("====================================");
      setAutoplay(true);
      // if (swiperRef.current) {
      //   swiperRef.current.autoplay.start();
      // }
    } else {
      //make sure `autoplay` is enabled when swiper is initialized and loaded from config file
      // setAutoplay(false);
      // setAutoplay({ autoplay: 15000 });
    }
  }, [type, isSEnded, position]);
  SwiperCore.use([Pagination, Navigation, Autoplay]);

  // useEffect(() => {
  //   if (allMediaPlayed) {
  //     moveNextCard(); // Move to the next card
  //   }
  // }, [isSEnded, src, moveNextCard]);
  // console.log("====================================");
  // console.log(src);
  // console.log("====================================");
  return (
    <div className={cardStyles.container}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={autoplay}
        dir={dir}
        ref={swiperRef}
        navigation={false}
        onReachEnd={(swiper) => {
          swiper.autoplay.stop();
          setAllMediaPlayed(true);
        }}
        onSlideChange={(swiper) => {
          // Only trigger handleSlideChange for the first slide (index 0)
          handleSlideChange(swiper);
        }}
        className={cardStyles.swiper}
      >
        <div>
          {src &&
            src.map((file, index) => (
              <SwiperSlide
                key={file.displayFileForPostID || index}
                data-type={file.fileCodeNumber === 0 ? "image" : "video"}
              >
                <TypeFile
                  file={`${defaultProjectProxyRouteWithoutAPI}${file.displayFile}`}
                  title={""}
                  type={file.fileCodeNumber === 0 ? "image" : "video"}
                  handleVideoEnd={
                    file.fileCodeNumber === 1 ? handleVideoEnd : null
                  }
                />
              </SwiperSlide>
            ))}
        </div>
        {/* <SwiperSlide
        // key={file.displayFileForPostID || index}
        // data-type={file.fileCodeNumber === 0 ? "image" : "video"}
        >
          ahmed
        </SwiperSlide> */}
      </Swiper>
      <div className={cardStyles.contentContainer}>
        <div className={cardStyles.title}>{postTitle}</div>
        <p className={cardStyles.description}>{description}</p>
      </div>
      <div className={cardStyles.tagContainer}>
        <span className={`${cardStyles.tag} ${cardStyles.tagPhotography}`}>
          #photography
        </span>
        <span className={`${cardStyles.tag} ${cardStyles.tagTravel}`}>
          #travel
        </span>
        <span className={`${cardStyles.tag} ${cardStyles.tagWinter}`}>
          #winter
        </span>
      </div>
    </div>
  );
}

export default Card;
