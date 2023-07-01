import telephoneImg from "../../../src/assets/icons/telephone.png";
import emailImg from "../../../src/assets/icons/email.png";
import mapImg from "../../../src/assets/icons/map-marker.png";

const Contact = () => {
  return (
    <section id="contact" className="py-[120px] bg-[#292930] relative">
      <div className="max-w-[1366px] mx-auto px-[3%] lg:px-0">
        <div className="flex items-center justify-center gap-x-3">
          <div className="w-3 h-3 rounded-full bg-[#ffd109]"></div>
          <p className="text-lg text-[#8a90a2]">Contact</p>
        </div>
        <h2 className="text-6xl font-bold text-center mt-5 mb-8 text-white">
          Say Hello
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row mt-24">
          <div className="text-white lg:w-[40%] lg:pr-20">
            <h3 className="text-3xl font-semibold">Contact Info.</h3>
            <p className="text-gray-400 mt-4">
              Message me for any question or remarks. I will get back to you as
              fast as possible.
            </p>
            <div>
              <div className="flex gap-3 items-center text-lg mt-12">
                <img src={telephoneImg} alt="" className="w-10" />
                +8801630395223
              </div>
              <div className="flex gap-3 items-center text-lg mt-12">
                <img src={emailImg} alt="" className="w-10" />
                roufhasan5@gmail.com
              </div>
              <div className="flex gap-3 items-center text-lg mt-12">
                <img src={mapImg} alt="" className="w-10" />
                Dhaka, Bangladesh.
              </div>
            </div>
          </div>
          <form
            action="https://formspree.io/f/mknlwyzv"
            method="POST"
            className="flex flex-col gap-6 lg:w-[60%]"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="p-5 rounded-[10px] border focus:border-[#ffd109] outline-none bg-transparent text-white transition ease-in-out duration-500"
            />
            <input
              type="email"
              name="email"
              id="emial"
              placeholder="Enter your email"
              required
              className="p-5 rounded-[10px] border focus:border-[#ffd109] outline-none bg-transparent text-white transition ease-in-out duration-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="bg-transparent text-white border focus:border-[#ffd109] outline-none transition ease-in-out duration-500 p-5 rounded-[10px] h-44"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-[#ffd109] font-semibold hover:bg-[#5956e9] hover:text-white transition ease-out duration-300 py-5 rounded-[10px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
