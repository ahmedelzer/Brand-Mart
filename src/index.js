import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageContext from "./context/Language";
import Loading from "./component/Loading/Loading";
import "./index.css";
import RegistrationContext from "./context/Registration";
import Contact from "./context/Contact";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <LanguageContext>
        <Contact>
          <RegistrationContext>
            <App />
          </RegistrationContext>
        </Contact>
      </LanguageContext>
    </React.StrictMode>
  </Suspense>
);
