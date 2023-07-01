import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="relative">
      <nav
        className={`w-full fixed top-0 z-50 ${
          colorChange ? "bg-white lg:bg-[#5956e9] lg:text-white" : "bg-white"
        } flex justify-between items-center px-[3%] mb-16 lg:mb-0`}
      >
        <Link
          to="home"
          smooth={true}
          duration={1500}
          className="uppercase font-secondary text-3xl font-bold"
        >
          Rouf hasan
        </Link>
        <div className="py-5 lg:hidden">
          {menu && (
            <HiMenu onClick={() => setMenu(false)} size={"32px"}></HiMenu>
          )}
        </div>
        {/* ----- Menu Links For Large Device ----- */}
        <div className="hidden lg:flex gap-x-7 text-lg font-medium">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className={`py-5 relative hover:text-primaryBlack after:content-[''] after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl cursor-pointer ${
              colorChange
                ? "after:bg-white text-white"
                : "after:bg-[#3700ff] text-[#292930]"
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1500}
            className={`py-5 relative hover:text-primaryBlack after:content-[''] after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl cursor-pointer ${
              colorChange
                ? "after:bg-white text-white"
                : "after:bg-[#3700ff] text-[#292930]"
            }`}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1500}
            className={`py-5 relative hover:text-primaryBlack after:content-[''] after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl cursor-pointer ${
              colorChange
                ? "after:bg-white text-white"
                : "after:bg-[#3700ff] text-[#292930]"
            }`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1500}
            className={`py-5 relative hover:text-primaryBlack after:content-[''] after:h-[3px] after:absolute after:w-[0%] hover:after:w-[120%] after:duration-300 after:left-0 after:-bottom-[-5px] after:rounded-xl cursor-pointer ${
              colorChange
                ? "after:bg-white text-white"
                : "after:bg-[#3700ff] text-[#292930]"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* ----- Hamburger Menu Links ----- */}
      {!menu && (
        <div className="w-full bg-white h-screen flex flex-col gap-6 items-center justify-center fixed top-0 z-50 text-[#ff7675] font-medium">
          <ul className="flex flex-col gap-4 text-[#292930]">
            <li>
              <Link
                onClick={() => setMenu(true)}
                to="home"
                smooth={true}
                duration={1500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenu(true)}
                to="about"
                smooth={true}
                duration={1500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenu(true)}
                to="projects"
                smooth={true}
                duration={1500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenu(true)}
                to="contact"
                smooth={true}
                duration={1500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <HiX
            onClick={() => setMenu(true)}
            size={"32px"}
            className="mt-16"
          ></HiX>
        </div>
      )}
    </div>
  );
};

export default Navbar;
