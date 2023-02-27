import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Survey from "../views/Survey";
import Login from "../views/Login";
import Signup from "../views/Signup";
import GuestLayout from "../layouts/GuestLayout";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/surveys",
        element: <Survey />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
