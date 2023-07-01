import movingCircle from "../../../src/assets/moving-circle.json";
import miniShapes from "../../../src/assets/mini-shapes.json";
import profileImg from "../../../src/assets/profile.png";
import gitHubImg from "../../../src/assets/icons/github.png";
import linkedInImg from "../../../src/assets/icons/linkedin.png";
import twitterImg from "../../../src/assets/icons/twitter.png";
import resume from "../../assets/resume/Rouf Hasan Hridoy's Resume.pdf";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[780px] w-full flex flex-col lg:flex-row-reverse justify-between max-w-[1366px] mx-auto items-center px-[3%] pt-16 pb-16 sm:pb-0 lg:px-0 relative"
    >
      <div className="w-full lg:w-1/2">
        <div className="absolute top-0 right-0 w-3/4 sm:w-1/2 -z-50">
          <Lottie animationData={movingCircle} loop={true} />
        </div>
        <div className="absolute top-0 left-5 -z-50">
          <Lottie
            className="h-96 sm:h-auto"
            animationData={miniShapes}
            loop={true}
          />
        </div>
        <img src={profileImg} className="w-full sm:w-3/4 sm:mx-auto" />
      </div>
      <div className="realtive mt-16 lg:mt-0 lg:w-1/2">
        <h3 className="text-3xl font-bold mb-2">
          Hi, <span className="text-[#5956e9]">I&apos;m</span>
        </h3>
        <h2 className="text-[50px] sm:text-[66px] font-bold text-[#292930]">
          Rouf Hasan Hridoy
        </h2>
        <div className="font-semibold text-[#5956e9] text-2xl lg:text-4xl mt-6 mb-16">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Front-End React Developer.", "MERN Stack Developer."],
            }}
          />
        </div>
        <div>
          <a
            href={resume}
            download
            className="relative inline-block px-6 py-3 font-medium group mr-9"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
            <span className="absolute inset-0 w-full h-full bg-[#570df8] border-2 border-[#570df8] group-hover:bg-black group-hover:border-black rounded"></span>
            <span className="relative text-white group-hover:text-white flex items-center">
              My Resume <HiDocumentArrowDown className="ml-1" size={"22px"} />
            </span>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={1500}
            className="relative inline-block px-6 py-3 font-medium group mt-9 sm:mt-0"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
            <span className="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-black rounded"></span>
            <span className="relative text-black group-hover:text-white">
              Say Hello 👋
            </span>
          </Link>
        </div>
        <div className="hidden lg:block absolute top-[38%] right-0 mt-8 lg:mt-0">
          <div className="flex flex-col gap-8 justify-evenly lg:justify-normal bg-transparent">
            <a href="https://twitter.com/roufhasan" target="_blanck">
              <img src={twitterImg} alt="" className="w-12" />
            </a>
            <a href="https://github.com/roufhasan" target="_blanck">
              <img src={gitHubImg} alt="" className="w-12" />
            </a>
            <a href="https://bd.linkedin.com/roufhasan" target="_blanck">
              <img src={linkedInImg} alt="" className="w-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
