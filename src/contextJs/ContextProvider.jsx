import { createContext, useState } from "react";

// create context here
export const Context = createContext();

const ContextProvider = ({ children }) => {
  // useState for mobile navbar
  const [mobileNav, setMobileNav] = useState(false);

  // pass value from these variable
  const contextInfo = { mobileNav, setMobileNav };

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default ContextProvider;
