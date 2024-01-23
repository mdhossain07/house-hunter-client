import AddHouse from "./AddHouse";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const OwnerDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);

  const handleAddHouse = (houseDetails) => {
    axiosPublic.post("/api/v1/add-house", houseDetails).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Done!",
          text: "New House is created!",
          icon: "success",
        });
      }
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="h-full">
      <h2 className="text-3xl font-semibold p-5">Welcome To Dashboard</h2>

      <button className="btn " onClick={() => setShowModal(true)}>
        Add House
      </button>
      {showModal && <AddHouse onClose={handleClose} onSave={handleAddHouse} />}
    </div>
  );
};

export default OwnerDashboard;
