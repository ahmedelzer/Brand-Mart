import React, { useState } from "react";
import { MdRateReview } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { actionsStyles } from "./styles"; // Import the styles

function Actions({ review, setReview }) {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const toggleView = () => {
    setIsViewed(!isViewed);
    setViews(isViewed ? views - 1 : views + 1);
  };

  return (
    <div className={actionsStyles.container}>
      <div className={actionsStyles.item}>
        <p className={actionsStyles.count}>{views}</p>
        <div className={actionsStyles.iconWrapper}>
          <IoMdEye
            size={24}
            onClick={toggleView}
            className={`${actionsStyles.icon} ${
              isViewed ? actionsStyles.iconLiked : ""
            }`}
          />
        </div>
      </div>
      <div className={actionsStyles.item}>
        <p className={actionsStyles.count}>{likes}</p>
        <div className={actionsStyles.iconWrapper}>
          <BiSolidLike
            size={24}
            onClick={toggleLike}
            className={`${actionsStyles.icon} ${
              isLiked ? actionsStyles.iconLiked : ""
            } ${actionsStyles.iconHover}`}
          />
        </div>
      </div>
      {!review && (
        <div className={actionsStyles.item}>
          <div className={actionsStyles.iconWrapper}>
            <MdRateReview
              size={24}
              onClick={() => setReview(true)}
              className={`${actionsStyles.icon} ${actionsStyles.iconHover}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Actions;
