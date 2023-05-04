import { createContext, useEffect, useState } from "react";
// firebase auth
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
  const [user, setUser] = useState(null);
  // user show password here
  const [show, setShow] = useState(false);

  // error state here
  const [error, setError] = useState("");
  // loading state here
  const [loading, setLoading] = useState(true);
  // useState for mobile navbar
  const [mobileNav, setMobileNav] = useState(false);

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // google log in here
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github provider
  const githubProvider = new GithubAuthProvider();

  // github log in here
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect for main load data
  useEffect(() => {
    fetch("https://savoir-cuisiner-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user ", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
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
    googleLogin,
    githubLogin,
    logOut,
    show,
    setShow,
  };

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default ContextProvider;
