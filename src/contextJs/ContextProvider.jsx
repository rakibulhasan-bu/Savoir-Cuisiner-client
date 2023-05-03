import { createContext, useEffect, useState } from "react";

// create context here
export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  // all chef data load here
  const [chefsData, setChefsData] = useState([]);
  // error state here
  const [error, setError] = useState("");
  // loading state here
  const [loading, setLoading] = useState("");
  // useState for mobile navbar
  const [mobileNav, setMobileNav] = useState(false);
  // pass value from these variable
  const contextInfo = {
    mobileNav,
    setMobileNav,
    chefsData,
    setChefsData,
    error,
    setError,
    loading,
    setLoading,
  };

  console.log(chefsData);
  // useEffect for main load data
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.error(error));
  }, []);

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default ContextProvider;
