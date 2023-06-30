import "./Projects.css";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[1366px] mx-auto py-[120px] px-[3%]"
    >
      <div className="flex items-center justify-center gap-x-3">
        <div className="w-3 h-3 rounded-full bg-[#ffd109]"></div>
        <p className="text-lg text-[#8a90a2]">Portfolio</p>
      </div>
      <h2 className="text-6xl font-bold text-center mt-5 mb-[120px] text-[#292930]">
        Recent Project&apos;s
      </h2>
      {/* --- All Projects Container --- */}
      <div>
        {/* --- Fluentify Project --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center shadow-custom3 rounded-2xl p-5">
          <div className="w-full lg:w-[55%] h-96 fluenify shadow-custom3 rounded-2xl"></div>
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930]">
              Fluentify 👨‍🏫
            </h4>
            <p className="text-[#767676] font-medium">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                MongoDB
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Live Demo<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
        </div>
        {/* --- Toy Verse Project --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center shadow-custom3 rounded-2xl p-5 my-14">
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930]">
              Fluentify 👨‍🏫
            </h4>
            <p className="text-[#767676] font-medium">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                MongoDB
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Live Demo<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[55%] h-96 toyVerse shadow-custom3 rounded-2xl"></div>
        </div>
        {/* --- Desi Food Hut Project --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center shadow-custom3 rounded-2xl p-5">
          <div className="w-full lg:w-[55%] h-96 DesiFoodHut shadow-custom3 rounded-2xl"></div>
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930]">
              Fluentify 👨‍🏫
            </h4>
            <p className="text-[#767676] font-medium">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3">
                MongoDB
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="#"
                className="flex items-center font-medium text-lg text-[#2d2e32] gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Live Demo<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
