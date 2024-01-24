/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={house.picture} alt={house.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{house?.name}</h2>
          <p>{house?.description}</p>

          <Link to={`/details/${house._id}`}>
            <button className="btn btn-primary w-full">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
