// import icons
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { Context } from "../contextJs/ContextProvider";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const { setMobileNav } = useContext(Context);
  return (
    <nav className="flex h-full w-80 items-center justify-center bg-violet">
      {/* close button  */}
      <div
        onClick={() => setMobileNav(false)}
        className="absolute left-2 top-2 cursor-pointer "
      >
        <CgClose className="text-3xl" />
      </div>
      {/* nav list  */}
      <ul className="flex flex-col gap-8 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Register</NavLink>
      </ul>
    </nav>
  );
};

export default NavMobile;
