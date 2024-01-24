import useHouses from "../../hooks/useHouses";

const Houses = () => {
  const [houseList] = useHouses();
  return (
    <div>
      <h2 className="text-3xl font-semibold">Houses</h2>
    </div>
  );
};

export default Houses;
