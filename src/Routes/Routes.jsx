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
import DashboardLayout from "../Layouts/DashboardLayout";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from '../Routes/AdminRoute/AdminRoute';
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";


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
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: 'updateItem/:id', 
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
      }
    ]
  }
]);
