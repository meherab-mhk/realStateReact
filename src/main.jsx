import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/authProvider/AuthProvider";
import ErrorPage from "./components/errorPage/ErrorPage";
import EstateDetails from "./components/estates/EstateDetails";
import Faq from "./components/faq/Faq";
import Home from "./components/homePage/Home";
import Login from "./components/loginPage/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Register from "./components/registerPage/Register";
import Root from "./components/rootLayout/Root";
import UserProfile from "./components/userProfile/UserProfile";
import "./index.css";
const helmetContext = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: (
          <PrivateRoute>
            <Faq></Faq>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
