import React from "react";
import { Link } from "react-router-dom";
import { brandServiceStyles } from "./styles"; // Import the styles

function BrandService({ name, desc, img, serviceID }) {
  const routeForm = `/form/${serviceID}`;

  return (
    <div className={brandServiceStyles.container}>
      <Link to={routeForm}>
        <div className={brandServiceStyles.card}>
          <div className={brandServiceStyles.iconWrapper}>
            {img ? (
              <img src={img} alt="static" />
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <h4 className={brandServiceStyles.title}>{name}</h4>
          <p className={brandServiceStyles.description}>{desc}</p>
          <div className={brandServiceStyles.buttonWrapper}>
            <Link to={routeForm} className={brandServiceStyles.button}>
              Request
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BrandService;
