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
    <header className="px-4 py-5 shadow-md md:px-8 lg:px-0">
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
                className="rounded-md  border-transparent bg-primary px-3 text-xl text-white transition-all duration-300 hover:bg-amber-500"
              >
                Log out
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="rounded-md  border-transparent bg-primary px-3 text-xl text-white transition-all duration-300  hover:bg-amber-500"
              >
                Log in
              </NavLink>
            )}
            {user && (
              <img
                title={user?.displayName}
                className="h-8 w-8 cursor-pointer rounded-full bg-gray-500 object-cover"
                src={user?.photoURL}
              />
            )}
          </ul>
        </div>
        {/* open nav buttons  */}
        <div
          onClick={() => setMobileNav(true)}
          className="cursor-pointer text-2xl md:text-4xl lg:hidden"
        >
          <CgMenuRight />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
