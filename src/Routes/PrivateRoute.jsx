/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  console.log(user);

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner text-info text-3xl"></span>;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
