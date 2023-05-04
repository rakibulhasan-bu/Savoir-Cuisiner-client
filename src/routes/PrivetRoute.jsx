import { useContext } from "react";
import { Context } from "../contextJs/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen bg-white">
        <div className="flex h-full items-center justify-center">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  } else if (!user) {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }

  return children;
};

export default PrivetRoute;
