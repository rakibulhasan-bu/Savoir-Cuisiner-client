import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { Context } from "./contextJs/ContextProvider";
import NavMobile from "./components/NavMobile";

const App = () => {
  const { mobileNav, setMobileNav } = useContext(Context);
  return (
    <div className="bg-gradient">
      <Navbar />

      {/* mobile nav here  */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        } fixed top-0 z-10 h-full transition-all duration-200`}
      >
        <NavMobile setMobileNav={setMobileNav} />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
