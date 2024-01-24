import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import OwnerDashboardLayout from "../Layout/OwnerDashboardLayout";
import OwnerDashboard from "../Pages/Owner/OwnerDashboard";
import HouseList from "../Pages/Owner/HouseList";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";
import Houses from "../Pages/Houses/Houses";
import PrivateRoute from "./PrivateRoute";
import RenterDashboardLayout from "../Layout/RenterDashboardLayout";
import RenterDashboard from "../Pages/Renter/RenterDashboard";
import MyBookings from "../Pages/Renter/MyBookings/MyBookings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/houses",
        element: <Houses />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <HouseDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/owner",
    element: <OwnerDashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <OwnerDashboard />,
        index: true,
      },
      {
        path: "house-list",
        element: <HouseList />,
      },
    ],
  },

  {
    path: "/renter",
    element: <RenterDashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <RenterDashboard />,
        index: true,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export default routes;
