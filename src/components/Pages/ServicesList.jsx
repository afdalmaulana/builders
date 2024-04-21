import { ourServices } from "../../constants";

export const ServicesList = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 mt-10 px-2 justify-center items-center">
        {ourServices.map((item, index) => (
          <div
            key={index}
            className="group relative text-xl text-white gap-6 w-[11rem] min-h-[20rem] widescreen:w-[25rem] widescreen:h-[30rem] bg-gradient-to-b from-black via-[#132A29] to-[#192E2D] border-greys border-2 rounded-lg  flex justify-center items-center cursor-pointer hover:bg-opacity-25 px-2 widescreen:px-8 hover:scale-105 transition-transform duration-300 ease-in-out "
          >
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
            <div className="flex flex-col items-center justify-center">
              <img src={item.img} alt="social" />
              <div className="text-xs">{item.name}</div>
              <div className="mt-5 text-xs">{item.desc}</div>
            </div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg opacity-0 transition-opacity duration-300 z-20 group-hover:opacity-100 hover:bg-secondary">
              See Portfolio
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
