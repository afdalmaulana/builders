import { useNavigate } from "react-router-dom";
import { connect } from "../assets";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  const navigate = useNavigate();
  const toContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="relative flex justify-center items-center h-96 bg-fixed bg-cover bg-parallax">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="z-10 text-8xl uppercase text-white font-bold relative">
          Connect With Us
        </h1>
      </div>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh] py-5 ">
        <div className="flex justify-center items-center px-[5rem]">
          <Fade duration={1000} direction="left" cascade={true} triggerOnce>
            <div className="py-[10rem] text-2xl font-primary text-greys">
              <p>
                We have assisted several companies in shaping their vision,
                providing innovative branding solutions, and enhancing their
                presence in the competitive market with effective and
                result-oriented marketing strategies.
              </p>
              <button
                className="px-10 py-3 bg-oranges text-primary text-xl rounded-xl mt-8 hover:bg-secondary capitalize"
                onClick={() => toContact()}
              >
                connect
              </button>
            </div>
          </Fade>
          <Fade duration={1000} direction="right" cascade={true} triggerOnce>
            <div className="">
              <img src={connect} alt="data" className="w-[180rem]" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
