// import icons
import { useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Context } from "../contextJs/ContextProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { setMobileNav, user, logOut } = useContext(Context);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <header className="py-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-primary">Savoir Cuisiner</h2>
        {/* nav and buttons  */}
        <div className="hidden items-center gap-x-14 lg:flex">
          {/* <Nav /> */}
          <ul className="flex gap-x-8">
            <NavLink
              to="/"
              // className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
            >
              Contact
            </NavLink>

            {user ? (
              <NavLink
                onClick={handleLogOut}
                to="/"
                className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
              >
                Log out
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="border-b-2 border-transparent text-xl transition-all duration-300 hover:border-primary"
              >
                Log in
              </NavLink>
            )}
          </ul>
        </div>
        {/* open nav buttons  */}
        <div
          onClick={() => setMobileNav(true)}
          className="cursor-pointer text-2xl lg:hidden"
        >
          <CgMenuRight />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
