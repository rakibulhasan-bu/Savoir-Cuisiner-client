import { useContext } from "react";
import { Context } from "../contextJs/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
