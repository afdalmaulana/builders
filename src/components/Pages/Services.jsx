import { Fade } from "react-awesome-reveal";
import { ServicesList } from "./ServicesList";

export const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-[#132A29] to-[#192E2D] ... relative py-8">
        <div className="text-5xl text-black py-3 widescreen:py-[5rem] flex flex-col justify-center items-center">
          <Fade duration={1000} direction="up" cascade={true} triggerOnce>
            <div className="font-primary text-xl widescreen:text-5xl text-white font-bold">
              Services We Provided
            </div>
            <ServicesList />
          </Fade>
        </div>
      </div>
    </>
  );
};
