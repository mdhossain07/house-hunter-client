import { Link, Outlet } from "react-router-dom";
import { FaHouse, FaUser } from "react-icons/fa6";

const OwnerDashboardLayout = () => {
  return (
    <div>
      <div className="flex min-h-screen ">
        <div className="w-1/3 lg:w-1/4 bg-[#0766AD] text-white p-3 flex flex-col justify-between">
          <div>
            <Link to="/owner/house-list">
              <div className="flex gap-2 items-center my-3">
                <FaUser className="text-xl" />
                <h2 className="font-medium text-xl">All Houses</h2>
              </div>
            </Link>
          </div>

          <div className="py-3">
            <hr />
            <Link to="/">
              <div className="flex gap-2 items-center mt-5">
                <FaHouse className="text-xl" />
                <h2 className="font-medium text-xl">Home</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboardLayout;
