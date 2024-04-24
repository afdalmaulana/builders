import { bgAbout } from "../../assets";
import { VisiMisi } from "../VisiMisi";
import { visi, misi } from "../../constants";
import workTeam from "../../assets/workTeam.jpg";

export const AboutPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative ">
        <div
          style={{ backgroundImage: `url(${bgAbout})` }}
          className="w-full h-[25rem] px-5 widescreen:px-[10rem] bg-center bg-cover relative"
        >
          <div className="w-[full] relative font-primary">
            <div className="absolute bg-gradient-to-b from-black via-[#132A29] to-[#192E2D]  ... w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl">
              <div className="text-oranges">About Us</div>
              <div className="text-4xl font-semibold text-white">
                Curly Bracket
              </div>
              <div className="text-greys mt-4">
                Dedicated to delivering branding excellence, we meticulously
                design distinctive brand identities that not only help
                businesses distinguish themselves but also foster deeper
                connections and engagement with their target audiences.
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[16rem] desktop:mt-[10rem] flex justify-center items-center h-56 desktop:h-72 bg-fixed bg-cover bg-parallax text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <h1 className="z-10 text-2xl  desktop:text-6xl uppercase text-white font-bold relative">
            Commitment is our Priority
          </h1>
        </div>
        <div className="flex justify-center mt-[2rem] items-center text-white font-primary">
          <div className="text-white px-5 py-[5rem]  relative flex flex-col desktop:flex-row">
            <div className=" ">
              <div className="tablet:flex justify-center items-center">
                <img
                  src={workTeam}
                  alt="minings"
                  className="z-10 relative w-[35rem] "
                />
              </div>
              <div className="py-10 widescreen:ml-[5rem] widescreen:px-4">
                <div className="relative z-10 text-4xl font-semibold ">
                  Visi{" "}
                </div>
                <ul className="mt-5">
                  {visi.map((item, index) => (
                    <li className="flex" key={index}>
                      <div>
                        <img
                          src={item.img}
                          alt="list"
                          className="min-w-6 min-h-6  "
                        />
                      </div>
                      <div className="text-[16px] px-7">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="desktop:ml-[2rem] z-10 desktop:px-5 widescreen:w-[50%] widescreen:px-[3.5rem]">
              <div className="text-4xl z-10 font-semibold">Misi</div>
              <ul className="mt-5 space-y-5 widescreen:space-y-8 widescreen:mt-10 ">
                {misi.map((item, index) => (
                  <li className="flex  widescreen:pr-4 z-10" key={index}>
                    <div>
                      <img
                        src={item.img}
                        alt="list"
                        className="min-w-6 min-h-6  "
                      />
                    </div>
                    <div className="text-[16px] px-7 ">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <VisiMisi /> */}
      </div>
    </>
  );
};
