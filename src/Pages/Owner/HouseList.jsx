/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const HouseList = () => {
  const [house, setHouse] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/api/v1/houses").then((res) => {
      setHouse(res.data);
    });
  }, [axiosPublic]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/api/v1/delete-house/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your house listing is deleted.",
              icon: "success",
            });
          }
          setHouse(house.filter((item) => item._id !== id));
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name & Image</th>
              <th>Address</th>
              <th>Rent (tk)</th>
              <th>Available Date</th>
              <th>Action</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {house?.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.address}
                  <br />
                </td>
                <td>{item.rent}</td>
                <td>{item.date}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseList;
