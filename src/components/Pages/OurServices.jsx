import { Fade } from "react-awesome-reveal";
import { OpenCards } from "../OpenCards";
import { AdvertCards } from "../AdvertCards";

export const OurServices = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black relative min-h-screen font-primary">
        <div className="flex flex-col justify-center items-center desktop:px-[10rem] text-center px-8">
          <Fade cascade duration={1000} triggerOnce>
            <h1 className="mt-[10rem] text-oranges text-6xl">Services</h1>
            <h2 className="text-greys mt-5 font-semibold text-xs desktop:text-lg">
              We proudly offer a range of customizable services tailored to your
              digital needs, from social media management to innovative design
              solutions, helping you achieve your digital goals with unique and
              effective solutions.
            </h2>
          </Fade>
        </div>
        <OpenCards />
        <AdvertCards />
      </div>
    </>
  );
};
