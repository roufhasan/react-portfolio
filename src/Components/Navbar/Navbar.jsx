import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <nav className="flex justify-between items-center max-w-[1366px] mx-auto px-[3%]">
        <div className="uppercase font-secondary text-3xl font-bold">
          Rouf hasan
        </div>
        <div className="py-5 lg:hidden">
          {menu && (
            <HiMenu onClick={() => setMenu(false)} size={"32px"}></HiMenu>
          )}
        </div>
        {/* ----- Menu Links For Large Device ----- */}
        <div className="hidden lg:flex gap-x-7 text-lg font-medium">
          <a
            href="#"
            className="py-5 text-primaryBlue relative hover:text-primaryBlack after:content-[''] after:bg-primaryBlue after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl"
          >
            Home
          </a>
          <a
            href="#"
            className="py-5 text-primaryBlue relative hover:text-primaryBlack after:content-[''] after:bg-primaryBlue after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl"
          >
            About
          </a>
          <a
            href="#"
            className="py-5 text-primaryBlue relative hover:text-primaryBlack after:content-[''] after:bg-primaryBlue after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl"
          >
            Skills
          </a>
          <a
            href="#"
            className="py-5 text-primaryBlue relative hover:text-primaryBlack after:content-[''] after:bg-primaryBlue after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl"
          >
            Contact
          </a>
        </div>
      </nav>
      {/* ----- Hamburger Menu Links ----- */}
      {!menu && (
        <div className="w-full bg-[#a29bfe] h-screen flex flex-col gap-6 items-center justify-center fixed top-0 left-0 z-50 text-[#ff7675] font-medium">
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <HiX onClick={() => setMenu(true)} size={"32px"}></HiX>
        </div>
      )}
    </>
  );
};

export default Navbar;
