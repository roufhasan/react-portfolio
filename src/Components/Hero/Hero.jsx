import programmer from "../../../src/assets/programmer-engineering.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex justify-between max-w-[1366px] mx-auto relative">
      <div className="text-3xl font-bold">Hello I&apos;m Rouf Hasan Hridoy</div>
      <div className="h-[600px]">
        <Lottie className="w-[750px]" animationData={programmer} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
