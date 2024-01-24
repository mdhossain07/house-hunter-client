import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8 md:px-16 lg:px-32 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
