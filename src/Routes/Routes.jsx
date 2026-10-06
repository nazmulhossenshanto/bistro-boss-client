import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home"; 
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Contact from "../pages/Contact/Contact/Contact";

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
        element: <Order></Order>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);
