import React from "react";
import { reviewStyles } from "./styles"; // Import the styles

function Review() {
  return (
    <div className={reviewStyles.container}>
      <figure className={reviewStyles.figure}>
        <blockquote className={reviewStyles.blockquote}>
          <p>I may not show it but I can't live without the product.</p>
        </blockquote>
        <figcaption className={reviewStyles.figcaption}>
          <img
            src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
            className={reviewStyles.img}
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className={reviewStyles.textBase}>"owner"</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Review;
