import { Fade } from "react-awesome-reveal";
import { ServicesList } from "./ServicesList";

export const Services = () => {
  return (
    <>
      <div class="bg-gradient-to-b from-black via-cyan-800 to-cyan-600 ... relative h-[100vh]">
        <div className="text-5xl text-black py-[5rem] flex flex-col justify-center items-center">
          <Fade duration={1500} direction="down" cascade={true}>
            <div className="font-primary text-5xl text-white font-bold">
              Services We Provided
            </div>
          </Fade>
          <Fade duration={1500} direction="up" cascade={true}>
            <ServicesList />
          </Fade>
        </div>
      </div>
    </>
  );
};
