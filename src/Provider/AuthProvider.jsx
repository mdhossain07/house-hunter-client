/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const axiosPublic = useAxiosPublic();

  const createUser = (userInfo) => {
    axiosPublic
      .post("/api/v1/create-user", userInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Done!",
            text: "New user is created!",
            icon: "success",
          });
        }

        localStorage.setItem("key", JSON.stringify(userInfo));

        setUser(JSON.parse(localStorage.getItem("key")));
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  const loginUser = (email, pass) => {
    axiosPublic
      .get(`/api/v1/users?email=${email}&pass=${pass}`)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: "Done!",
            text: "User Logged In!",
            icon: "success",
          });
        }
        localStorage.setItem("key", JSON.stringify(res.data));

        setUser(JSON.parse(localStorage.getItem("key")));
      })
      .catch(() => {
        Swal.fire("Error!", "Invalid Login Credentials", "error");
      });
  };

  const logOut = () => {
    localStorage.removeItem("key");
    setUser({});
    Swal.fire({
      title: "Done!",
      text: "User Logged Out!",
      icon: "success",
    });
  };

  const authInfo = { user, createUser, loginUser, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
