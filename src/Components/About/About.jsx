import profile from "../../../src/assets/profile.png";
import "./About.css";
import Lottie from "lottie-react";
import rounded from "../../../src/assets/eGQOWH3tWe.json";

const About = () => {
  return (
    <section id="about" className="max-w-[1366px] mx-auto py-[120px] relative">
      <div className="flex items-center justify-center gap-x-3">
        <div className="w-3 h-3 rounded-full bg-[#ffd109]"></div>
        <p className="text-lg text-[#8a90a2]">About Me</p>
      </div>
      <h2 className="text-6xl font-bold text-center mt-5 mb-[120px] text-[#292930]">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 px-[3%] lg:px-0">
        <div className="bg-[#FFDC60] img-bg overflow-hidden lg:w-[40%] rounded-[10px]">
          <img
            src={profile}
            className="h-[466px] mx-auto img-profile transition duration-1000 ease-in-out"
          />
        </div>
        <div className="lg:w-[60%]">
          <h3 className="text-4xl font-bold text-[#292930] mb-4">
            Rouf Hasan Hridoy
          </h3>
          <p className="uppercase font-medium text-sm text-[#5956e9] mb-6">
            MERN Stack Developer
          </p>
          <p className="text-[#767676] text-lg leading-6 tracking-wide max-w-[575px]">
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
        </div>
      </div>
      {
        <div className="absolute top-0 right-0 lg:w-[33%] -z-50">
          <Lottie className="" animationData={rounded} loop={true} />
        </div>
      }
    </section>
  );
};

export default About;
