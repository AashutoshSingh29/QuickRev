import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Course from "./components/Course";
import Error from "./components/Error";
import SubjectTopics from "./components/SubjectTopics";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Course />,
        errorElement: <Error />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/oops",
        element: <SubjectTopics subject="oops" />,
      },
      {
        path: "/javascript",
        element: <SubjectTopics subject="javascript" />,
      },
      {
        path: "/os",
        element: <SubjectTopics subject="os" />,
      },
      {
        path: "/linux",
        element: <SubjectTopics subject="linux" />,
      },
      {
        path: "/react",
        element: <SubjectTopics subject="react" />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
