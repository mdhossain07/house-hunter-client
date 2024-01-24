import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useHouses = () => {
  const axiosPublic = useAxiosPublic();
  const [houseList, seHouseList] = useState([]);

  useEffect(() => {
    axiosPublic.get("/api/v1/houses").then((res) => {
      seHouseList(res.data);
    });
  }, [axiosPublic]);
  return [houseList];
};

export default useHouses;
