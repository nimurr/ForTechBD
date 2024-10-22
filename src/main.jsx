import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import ErrorPage from "./Pages/Others/ErrorPage.jsx";
import Career from "./Pages/Career/Career.jsx"; 
import Services from './Components/HomePage/Services';
import Products from "./Components/HomePage/Product.jsx";
import Team from "./Components/HomePage/Team.jsx";
import ContactUs from './Pages/Contact/ContactUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
