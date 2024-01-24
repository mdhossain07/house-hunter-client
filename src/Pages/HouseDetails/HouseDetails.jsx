import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const HouseDetails = () => {
  const [houseInfo, setHouseInfo] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic.get(`/api/v1/house/${id}`).then((res) => {
      setHouseInfo(res.data);
    });
  }, [axiosPublic, id]);

  const handleBooking = () => {
    const bookingInfo = {
      email: user?.email,
      name: user?.name,
      houseId: houseInfo?._id,
      houseName: houseInfo?.name,
    };

    axiosPublic.post("/api/v1/book-house", bookingInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Done!",
          text: "House Rent Confirm!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <p className="text-2xl font-medium">{houseInfo?.name}</p>
      <img className="w-[500px] rounded-md py-5" src={houseInfo.picture}></img>
      <p>{houseInfo.description}</p>
      <p>Address: {houseInfo.address}</p>
      <p>House Rent: ${houseInfo.rent} /month</p>
      <p>Bedrooms: {houseInfo.bedrooms}</p>
      <p>Bathrooms: {houseInfo.bathrooms}</p>
      <p>Contact: {houseInfo.phone}</p>

      <button onClick={handleBooking} className="btn btn-info">
        Confirm Booking
      </button>
    </div>
  );
};

export default HouseDetails;
