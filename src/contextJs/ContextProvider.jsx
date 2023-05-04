import { createContext, useEffect, useState } from "react";
// firebase auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utilities/firebase.config";

const auth = getAuth(app);
// create context here
export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  // all chef data load here
  const [chefsData, setChefsData] = useState([]);
  // user state here
  const [user, setUser] = useState({});
  // user show password here
  const [show, setShow] = useState(false);
  // error state here
  const [error, setError] = useState("");
  // loading state here
  const [loading, setLoading] = useState("");
  // useState for mobile navbar
  const [mobileNav, setMobileNav] = useState(false);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // pass value from these variable
  const contextInfo = {
    auth,
    mobileNav,
    setMobileNav,
    chefsData,
    setChefsData,
    error,
    setError,
    loading,
    setLoading,
    user,
    setUser,
    createUser,
    signIn,
    show,
    setShow,
  };

  // useEffect for main load data
  useEffect(() => {
    fetch("https://savoir-cuisiner-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.error(error));
  }, []);

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default ContextProvider;
