import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="bg-[#5C4033] h-12 text-[#F4E1C1] flex justify-between items-center px-4">
        <h2 className="text-lg">Geez Dictionary</h2>

        {/* Desktop Menu (Visible on larger screens) */}
        <ul className="hidden md:flex items-center gap-12 w-[460px]">
          <li className="hover:text-black">
            <Link to="verbs"> ግሥ </Link>
          </li>
          <li className="hover:text-black">
            <Link to=""> ነባር</Link>
          </li>
          <li className="hover:text-black">
            <Link to=""> የቅኔ መጠነ ዜማ</Link>
          </li>
          <li className="hover:text-black">
            <Link to=""> አገባብ</Link>
          </li>
          <li className="hover:text-black">
            <Link to=""> ጸያፍ</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center">
          <Link to="" className=" hover:text-black ">
            Login
          </Link>
          <span>/</span>
          <Link to="" className=" hover:text-black">
            Sign Up
          </Link>
        </div>

        {/* Desktop Login/SignUp (Visible on larger screens) */}
        <div className="hidden md:flex justify-end items-center gap-4">
          <Link to="" className="hover:text-black">
            Login
          </Link>
          <span>/</span>
          <Link to="" className="hover:text-black">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu Icon (Visible on smaller screens) */}
        <button onClick={toggleMenu} className="text-3xl pr-5 md:hidden">
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Menu (Visible only on small screens when toggled) */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full bg-[#E9D2B5] px-5 space-y-4 flex flex-col items-center justify-center md:hidden`}
      >
        <Link
          to="verbs"
          className="bg-[#F4E1C1] w-64 h-12 text-center hover:bg-[#5C4033] p-2 rounded transition-all"
        >
          ግሥ
        </Link>
        <Link
          to=""
          className="bg-[#F4E1C1] w-64 h-12 text-center hover:bg-[#5C4033] p-2 rounded transition-all"
        >
          ነባር
        </Link>
        <Link
          to=""
          className="bg-[#F4E1C1] w-64 h-12 text-center hover:bg-[#5C4033] p-2 rounded transition-all"
        >
          የቅኔ መጠነ ዜማ
        </Link>
        <Link
          to=""
          className="bg-[#F4E1C1] w-64 h-12 text-center hover:bg-[#5C4033] p-2 rounded transition-all"
        >
          አገባብ
        </Link>
        <Link
          to=""
          className="bg-[#F4E1C1] w-64 h-12 text-center hover:bg-[#5C4033] p-2 rounded transition-all"
        >
          ጸያፍ
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
