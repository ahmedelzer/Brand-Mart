import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "../slider.css";
//requireds
import Cookies from "js-cookie";
import i18next from "i18next";
import { defaultProjectProxyRouteWithoutAPI } from "../request";

import SwiperCore, { Pagination, Navigation } from "swiper";
import TypeFile from "./TypeFile";
import { playlistStyles } from "./styles";
function PlayList({ files, setFile, isFile }) {
  return (
    <>
      <div className={playlistStyles.container}>
        <div className={playlistStyles.swiperWrapper}>
          {/* two */}
          <ul>
            <li>
              <Swiper
                modules={[Pagination, Navigation]}
                loop={false}
                navigation={false}
                breakpoints={{
                  200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                // pagination={{
                //   clickable: true,
                // }}
              >
                {/* transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
        opacity: 0.5; */}
                {files.map((file) => {
                  return (
                    <SwiperSlide key={file.displayFileForPostID}>
                      <button
                        onClick={() =>
                          setFile({
                            file:
                              defaultProjectProxyRouteWithoutAPI +
                              file.displayFile,
                            type: file.fileCodeNumber === 0 ? "image" : "video",
                          })
                        }
                        className={`${
                          defaultProjectProxyRouteWithoutAPI +
                            file.displayFile ===
                          isFile.file
                            ? `${playlistStyles.selectedButton}`
                            : ""
                        } ${playlistStyles.button}`}
                      >
                        <TypeFile
                          file={`${defaultProjectProxyRouteWithoutAPI}${file.displayFile}`}
                          type={file.fileCodeNumber === 0 ? "image" : "video"}
                          autoPlay={false}
                        />
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PlayList;
