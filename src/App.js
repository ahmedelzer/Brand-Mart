import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ComingSoon from "./component/ComingSoon";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import NotFound404 from "./component/NotFound404";
import { LanguageContext } from "./context/Language";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Test from "./pages/Test";

import About from "./pages/About";
import FormSteps from "./pages/FormSteps";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import RegistrationContext from "./context/Registration";
import Redirect from "./component/Redirect";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      {
        path: "/portfolio",
        element: (
          <Redirect
            url={"https://giem-house.me/PublicFiles/Giem-House%20Portfolio.pdf"}
          />
        ),
      },
      { path: "*", element: <NotFound404 /> },
    ],
  },
  {
    children: [
      { path: "/form/:serviceID", element: <FormSteps /> },
      { path: "/test", element: <Test /> },
      // { path: "/test", element: <Test /> },
      { path: "/soon", element: <ComingSoon /> },
    ],
  },
]);
function App() {
  const { localization, Right } = useContext(LanguageContext);
  useEffect(() => {
    window.document.dir = Right ? "rtl" : "ltr";
    //document.title = localization.appInfo.title;
  }, [Right]);
  ///////
  let position = { lat: 53, lng: 10 }; //! delete all packages do not need location and i18n
  return (
    // <>
    <RouterProvider router={router} />
    // </>
  );
}

export default App;
