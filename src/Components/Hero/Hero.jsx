import rounded from "../../../src/assets/eGQOWH3tWe.json";
import banner from "../../../src/assets/banner.json";
import profile from "../../../src/assets/profile.png";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import resume from "../../assets/resume/Rouf Hasan Hridoy's Resume.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[780px] w-full flex flex-col lg:flex-row-reverse justify-between max-w-[1366px] mx-auto items-center px-[3%] pt-16 lg:px-0 relative"
    >
      <div className="w-full lg:w-1/2">
        <div className="absolute top-0 right-0 lg:w-1/2 -z-50">
          <Lottie className="" animationData={rounded} loop={true} />
        </div>
        <div className="absolute top-0 left-5 -z-50">
          <Lottie className="" animationData={banner} loop={true} />
        </div>
        <img src={profile} className="w-full sm:w-3/4 sm:mx-auto" />
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
          {/* <p className="text-xl text-[#555] max-w-[550px] mb-6">
            A passionate MERN Stack Developer based in Dhaka, Bangladesh. 📍
          </p> */}
          <a href={resume} download className="btn btn-primary text-white mr-9">
            My Resume <HiDocumentArrowDown size={"22px"} />
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={1500}
            className="btn btn-outline"
          >
            Contact Me
          </Link>
        </div>
        <div className="bottom-10 mt-8 lg:mt-0">
          {/* <div className="flex gap-x-8 justify-evenly lg:justify-normal">
            <a
              href="#"
              className="flex items-center gap-x-3 font-semibold text-2xl text-[#1DA1F2]"
            >
              <FaTwitter></FaTwitter>{" "}
            </a>
            <a
              href="#"
              className="flex items-center gap-x-2 font-semibold text-2xl"
            >
              <FaGithub></FaGithub>{" "}
            </a>
            <a
              href="#"
              className="flex items-center gap-x-2 font-semibold text-2xl text-[#0077b5]"
            >
              <FaLinkedin></FaLinkedin>{" "}
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
