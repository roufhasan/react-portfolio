import gitHubImg from "../../../src/assets/icons/github.png";
import linkedInImg from "../../../src/assets/icons/linkedin.png";
import twitterImg from "../../../src/assets/icons/twitter.png";
import facebookImg from "../../../src/assets/icons/facebook.png";
import instagramImg from "../../../src/assets/icons/instagram.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#292930] border-t-2 border-white pt-14 pb-7">
      <div className="max-w-[1366px] mx-auto px-[3%] lg:px-0 text-white">
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="https://www.facebook.com/rouf.hasan30" target="_blanck">
            <img src={facebookImg} alt="" className="w-12" />
          </a>
          <a href="https://www.instagram.com/roufhasan" target="_blanck">
            <img src={instagramImg} alt="" className="w-12" />
          </a>
          <a href="https://www.twitter.com/roufhasan" target="_blanck">
            <img src={twitterImg} alt="" className="w-12" />
          </a>
          <a href="https://www.linkedin.com/roufhasan" target="_blanck">
            <img src={linkedInImg} alt="" className="w-12" />
          </a>
          <a href="https://www.github.com/roufhasan" target="_blanck">
            <img src={gitHubImg} alt="" className="w-12" />
          </a>
        </div>
        <p className="text-center mt-10 text-gray-400">
          Copyright © {year} - All right reserved by Rouf Hasan Hridoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
