import { Fade } from "react-awesome-reveal";
import { ourClients } from "../../constants";

export const Client = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative  font-primary">
        <div className="flex flex-col justify-center items-center desktop:px-[10rem] text-center px-8">
          <Fade cascade duration={1000} triggerOnce>
            <h1 className="mt-[10rem] text-white text-6xl">Clients</h1>
            <h2 className="text-greys mt-5 font-semibold text-xs desktop:text-lg">
              We proudly collaborate with diverse clients, from emerging
              startups to established brands, helping each one to achieve their
              unique digital goals with tailored solutions.
            </h2>
          </Fade>
        </div>
        <div className="flex justify-center items-center py-9">
          <div className="grid grid-cols-2 desktop:grid-cols-5 gap-[5rem] mt-8 py-8 md:pb-[10rem]">
            <Fade duration={1000} cascade triggerOnce>
              {ourClients.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl p-2 rounded-full w-[8rem] h-[8rem]  flex justify-center items-center overflow-hidden hover:scale-110 transition-transform duration-900 ease-in-out"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="object-contain w-full h-full "
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
