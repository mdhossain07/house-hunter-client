import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import OwnerDashboardLayout from "../Layout/OwnerDashboardLayout";
import OwnerDashboard from "../Pages/Owner/OwnerDashboard";
import HouseList from "../Pages/Owner/HouseList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
]);

export default routes;
