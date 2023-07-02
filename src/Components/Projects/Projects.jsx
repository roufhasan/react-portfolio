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
      <h2 className="text-6xl font-bold text-center mt-5 mb-[120px] text-[#292930] dark:text-white leading-relaxed">
        <span className="text-[#5956e9] border-b-8 border-[#ffd109]">
          Recent
        </span>{" "}
        Project&apos;s
      </h2>
      {/* --- All Projects Container --- */}
      <div>
        {/* --- Fluentify Project --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center shadow-custom3 dark:shadow-darkModeShadow rounded-2xl p-5">
          <div className="w-full lg:w-[55%] h-96 fluenify shadow-custom3 dark:shadow-darkModeShadow rounded-2xl"></div>
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930] dark:text-white">
              Fluentify 👨‍🏫
            </h4>
            <p className="text-[#767676] dark:text-[#b4b4b4] font-medium">
              Fluentify website is an online platform that allows users to learn
              and imporve their language skill. The website provides an
              interface for selecting, updating, and payment method for classes.
              Also diffrenet kind of dashboard based on user&apos;s role.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                ExpressJS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                MongoDB
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="https://github.com/roufhasan/fluentify-client"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/roufhasan/fluentify-server"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://fluentify-4bc36.web.app/"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Live Demo<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
        </div>
        {/* --- Toy Verse Project --- */}
        <div className="flex flex-col-reverse lg:flex-row gap-24 items-center shadow-custom3 dark:shadow-darkModeShadow rounded-2xl p-5 my-14">
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930] dark:text-white">
              Toy Verse 🚀
            </h4>
            <p className="text-[#767676] dark:text-[#b4b4b4] font-medium">
              Toy Verse is a toy shop website that shows category based toys on
              homepage. A user can create, update & also delete their toys.
              Everyone can see the toys added by the user&apos;s.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                ExpressJS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                MongoDB
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="https://github.com/roufhasan/toy-verse-client"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/roufhasan/toy-verse-server"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://toy-verse-c8022.web.app/"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Live Demo<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[55%] h-96 toyVerse shadow-custom3 rounded-2xl dark:shadow-darkModeShadow"></div>
        </div>
        {/* --- Desi Food Hut Project --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center shadow-custom3 dark:shadow-darkModeShadow rounded-2xl p-5">
          <div className="w-full lg:w-[55%] h-96 DesiFoodHut shadow-custom3 dark:shadow-darkModeShadow rounded-2xl"></div>
          <div className="text-center w-full lg:w-[45%]">
            <h4 className="uppercase mb-5 font-bold text-xl text-[#292930] dark:text-white">
              Desi Food Hut 🍕
            </h4>
            <p className="text-[#767676] dark:text-[#b4b4b4] font-medium">
              A food receipe website is a comprehensive resource for receipe
              information by their favourite chefs. To help user to taste their
              favourite amazing food .
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                TailwindCSS
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                React
              </p>
              <p className="shadow-custom3 text-lg font-semibold py-2 px-3 dark:border dark:border-[#5956e9]">
                Firebase
              </p>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2 mt-16">
              <a
                href="https://github.com/roufhasan/desi-food-hut-client"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Client Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/roufhasan/desi-food-hut-server"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
              >
                Server Side<FaGithub></FaGithub>
              </a>
              <a
                href="https://desi-food-hut.web.app/"
                target="_blanck"
                className="flex items-center font-medium text-lg text-[#2d2e32] dark:text-white gap-2 hover:text-[#5956e9] transition-all ease-in-out duration-300"
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
