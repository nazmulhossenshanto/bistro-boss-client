import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home"; 
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Contact from "../pages/Contact/Contact/Contact";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],

  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
]);
