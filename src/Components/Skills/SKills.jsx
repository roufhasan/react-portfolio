import { Tooltip } from "react-tooltip";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import tailwindCSSIcon from "../../assets/icons/tailwind-css.svg";
import javaScriptIcon from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";
import expressJSIcon from "../../assets/icons/express-js.svg";
import mongoDBIcon from "../../assets/icons/mongodb.svg";
import shape1 from "../../assets/icons/shape1.png";
import journey from "../../assets/icons/journey.png";
import "./Skills.css";

const SKills = () => {
  return (
    <section id="skills" className="py-[120px] bg-[#292930] relative">
      <div className="max-w-[1366px] mx-auto">
        <div className="flex items-center justify-center gap-x-3">
          <div className="w-3 h-3 rounded-full bg-[#ffd109]"></div>
          <p className="text-lg text-[#8a90a2]">I&apos;m Expert In</p>
        </div>
        <h2 className="text-6xl font-bold text-center mt-5 mb-[70px] text-white">
          Skills
        </h2>
        <div className="flex flex-wrap max-w-2xl gap-8 justify-center mx-auto">
          <img
            src={htmlIcon}
            alt=""
            id="htmlIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={cssIcon}
            alt=""
            id="cssIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={bootstrapIcon}
            alt=""
            id="bootstrapIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={tailwindCSSIcon}
            alt=""
            id="tailwindIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={javaScriptIcon}
            alt=""
            id="jsIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={reactIcon}
            alt=""
            id="reactIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={firebaseIcon}
            alt=""
            id="firebaseIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={expressJSIcon}
            alt=""
            id="expressJSIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
          <img
            src={mongoDBIcon}
            alt=""
            id="mongodbIcon"
            className="hover:-translate-y-6 transition ease-in-out duration-1000"
          />
        </div>
        <Tooltip
          anchorId="htmlIcon"
          place="bottom"
          variant="light"
          content="HTML5"
        />
        <Tooltip
          anchorId="cssIcon"
          place="bottom"
          variant="light"
          content="CSS3"
        />
        <Tooltip
          anchorId="bootstrapIcon"
          place="bottom"
          variant="light"
          content="Bootstrap 5"
        />
        <Tooltip
          anchorId="tailwindIcon"
          place="bottom"
          variant="light"
          content="TailwindCSS"
        />
        <Tooltip
          anchorId="jsIcon"
          place="bottom"
          variant="light"
          content="JavaScript"
        />
        <Tooltip
          anchorId="reactIcon"
          place="bottom"
          variant="light"
          content="ReactJS"
        />
        <Tooltip
          anchorId="firebaseIcon"
          place="bottom"
          variant="light"
          content="Firebase"
        />
        <Tooltip
          anchorId="expressJSIcon"
          place="bottom"
          variant="light"
          content="Express JS"
        />
        <Tooltip
          anchorId="mongodbIcon"
          place="bottom"
          variant="light"
          content="MongoDB"
        />
      </div>
      <img
        src={shape1}
        alt=""
        className="hidden md:block w-24 absolute top-0 md:top-16 left-0 md:left-12 shape"
      />
      <img
        src={journey}
        alt=""
        className="hidden md:block w-24 absolute bottom-0 md:bottom-16 right-0 md:right-12 shape-2"
      />
    </section>
  );
};

export default SKills;
