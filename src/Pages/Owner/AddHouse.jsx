/* eslint-disable react/prop-types */
import { useState } from "react";

const AddHouse = ({ onSave, onClose }) => {
  const [houseDetails, setHouseDetails] = useState({
    name: "",
    address: "",
    city: "",
    bedrooms: 0,
    bathrooms: 0,
    size: "",
    picture: "",
    date: "",
    phone: "",
    rent: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setHouseDetails({ ...houseDetails, [name]: value });
  };

  return (
    <div>
      <div className="bg-black bg-opacity-70 h-full w-full z-2 absolute top-0 left-0">
        <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 left-1/3 absolute">
          {/* <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {isAdd ? "Add New Task" : "Edit Task"}
          </h2> */}

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Name</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="name"
                value={houseDetails.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-between gap-5">
              <div className="space-y-2 lg:space-y-3 flex-1">
                <label htmlFor="title">Address</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="address"
                  value={houseDetails.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">City</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="city"
                  value={houseDetails.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="space-y-2 lg:space-y-3 ">
                <label htmlFor="title">Bedrooms</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="number"
                  name="bedrooms"
                  id="title"
                  value={houseDetails.bedrooms}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Bathrooms</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="number"
                  name="bathrooms"
                  value={houseDetails.bathrooms}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Room Size(sqft)</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="size"
                  value={houseDetails.size}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="space-y-2 lg:space-y-3 flex-1">
                <label htmlFor="title">Picture URL</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="picture"
                  value={houseDetails.picture}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Availablity Date</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="date"
                  name="date"
                  value={houseDetails.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="space-y-2 lg:space-y-3 flex-1">
                <label htmlFor="title">Phone Number</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="phone"
                  value={houseDetails.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Rent Per Month</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="rent"
                  value={houseDetails.rent}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                value={houseDetails.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-16 flex gap-10 justify-center lg:mt-20">
            <button
              type="button"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={() => {
                setHouseDetails(null);
                onSave(houseDetails);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHouse;
