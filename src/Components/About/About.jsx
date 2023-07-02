import profile from "../../../src/assets/profile.png";
import "./About.css";
import Lottie from "lottie-react";
import movingCircle from "../../../src/assets/moving-circle.json";
import { HiDocumentArrowDown } from "react-icons/hi2";
import resume from "../../assets/resume/Rouf Hasan Hridoy's Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1366px] mx-auto py-[120px] relative px-[3%]"
    >
      <div className="flex items-center justify-center gap-x-3">
        <div className="w-3 h-3 rounded-full bg-[#ffd109]"></div>
        <p className="text-lg text-[#8a90a2]">About Me</p>
      </div>
      <h2 className="text-6xl font-bold text-center mt-5 mb-[120px] text-[#292930] dark:text-white">
        Personal Info
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 px-[3%] lg:px-0">
        <div className="bg-[#FFDC60] img-bg overflow-hidden lg:w-[40%] rounded-[10px]">
          <img
            src={profile}
            className="h-[466px] mx-auto img-profile transition duration-1000 ease-in-out"
          />
        </div>
        <div className="lg:w-[60%]">
          <h3 className="text-4xl font-bold text-[#292930] dark:text-white mb-4">
            Rouf Hasan Hridoy
          </h3>
          <p className="uppercase font-medium text-sm text-[#5956e9] mb-6">
            MERN Stack Developer
          </p>
          <p className="text-[#767676] dark:text-[#b4b4b4] text-lg leading-6 tracking-wide max-w-[575px]">
            As a Junior MERN Stack Developer, I possess an impressive arsenal of
            skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, React,
            Firebase, ExpressJS and MongoDB. I excel in designing and
            maintaining responsive websites that offer a smooth user experience.
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications. If you are a business seeking a web
            presence or an employer looking to hire, feel free to get in touch.
          </p>
          <div className="text-center lg:text-left">
            <a
              href={resume}
              download
              className="relative inline-block px-6 py-3 font-medium group mt-9"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5856e9c9] group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
              <span className="absolute inset-0 w-full h-full bg-[#FFDC60]  border border-black group-hover:bg-black rounded"></span>
              <span className="relative text-black group-hover:text-white flex items-center">
                My Resume <HiDocumentArrowDown className="ml-1" size={"22px"} />
              </span>
            </a>
          </div>
        </div>
      </div>
      {
        <div className="absolute top-0 right-0 lg:w-[33%] -z-50">
          <Lottie className="" animationData={movingCircle} loop={true} />
        </div>
      }
    </section>
  );
};

export default About;
