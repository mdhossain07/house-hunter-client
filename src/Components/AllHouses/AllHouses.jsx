import HouseCard from "../HouseCard/HouseCard";
import useHouses from "../../hooks/useHouses";

const AllHouses = () => {
  const [houseList] = useHouses();

  return (
    <>
      <h2 className="text-center text-3xl font-semibold">All Houses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {houseList.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
    </>
  );
};

export default AllHouses;
