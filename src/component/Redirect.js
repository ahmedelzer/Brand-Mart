import { useEffect, useRef } from "react";
// import cardStyles from "./cardStyles"; // adjust if needed
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

function Redirect({ url }) {
  const opened = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (url && !opened.current) {
      // Open the URL in a new tab
      window.open(url, "_blank", "noopener,noreferrer");
      opened.current = true;

      // Navigate to /home
      navigate("/");
    }
  }, [url, navigate]);

  return null; // nothing to render
}

export default Redirect;
