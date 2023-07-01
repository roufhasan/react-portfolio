import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#292930] border-t-2 border-white pt-14 pb-7">
      <div className="max-w-[1366px] mx-auto px-[3%] lg:px-0 text-white">
        <div className="flex justify-between flex-wrap gap-6">
          <div className="flex gap-5 text-gray-300 flex-wrap">
            <div className="flex items-center gap-2">
              <FaEnvelope></FaEnvelope>
              <a href="mailto:roufhasan5@gmail.com" target="_blanck">
                roufhasan5@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone></FaPhone>
              <a href="tel:+8801630395223">+8801630395223</a>
            </div>
          </div>
          <div className="flex text-xl gap-4">
            <a href="#">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#">
              <FaGithub></FaGithub>
            </a>
            <a href="#">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <p className="text-center mt-10 text-gray-400">
          Copyright © {year} - All right reserved by Rouf Hasan Hridoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
