import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/Language";
// import { LanguageContext } from "../../../contexts/Language";

function TypeFile({
  file,
  title,
  type = false,
  handleVideoEnd,
  autoPlay = true,
}) {
  const { localization } = useContext(LanguageContext);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  let fileUrl = type ? file : URL.createObjectURL(file);
  const typeFile = type ? type : file.type;
  const [fileSrc, setFileSrc] = useState(null);

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        }
        return response.blob();
      })
      .then((blob) => {
        const imgURL = URL.createObjectURL(blob);
        setFileSrc(imgURL); // Set the dynamic image source
      })
      .catch((error) => console.error("Error fetching the image:", error));
  }, [fileUrl]);
  // Use regex to determine the correct MIME type from the file URL
  const getMimeTypeFromUrl = (url) => {
    const extension = url.split(".").pop().toLowerCase();
    return `${typeFile}/${extension}`;
  };

  const mimeType = getMimeTypeFromUrl(fileUrl);
  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVideoLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(videoRef.current);

      return () => observer.disconnect();
    }
  }, [videoRef]);
  const renderFileContent = () => {
    switch (true) {
      case typeFile.startsWith("image"):
        return (
          <img
            src={fileSrc}
            alt={title}
            className="w-full h-auto"
            loading="lazy"
          />
        );
      case typeFile.startsWith("video"):
        return (
          <video
            ref={videoRef}
            controls
            muted
            onEnded={handleVideoEnd}
            className="w-full h-auto"
            autoPlay={isVideoLoaded && autoPlay}
          >
            <source src={fileSrc} type={mimeType} />
            {localization.fileContainer.videoNotSupport}
          </video>
        );
      default:
        return <div>{localization.fileContainer.fileNotSupport}</div>;
    }
  };

  return <div>{renderFileContent()}</div>;
}

export default TypeFile;
