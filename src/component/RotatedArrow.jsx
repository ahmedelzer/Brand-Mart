import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
const RotatedArrow = ({ angle }) => {
  const arrowStyle = {
    transform: `rotate(${angle}deg)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div style={{ display: "inline-block", transform: `rotate(${angle}deg)` }}>
      <FaArrowLeftLong size={20} style={arrowStyle} className="arrow" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        fill="currentColor"
        
      >
        <path d="M438.6 209.6l-194.6-194.6c-12.5-12.5-32.8-12.5-45.3 0l-194.6 194.6c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l147.6-147.6v275.6c0 17.7 14.3 32 32 32s32-14.3 32-32v-275.6l147.6 147.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg> */}
    </div>
  );
};

export default RotatedArrow;
