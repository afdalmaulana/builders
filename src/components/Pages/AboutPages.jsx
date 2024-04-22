import { bgAbout } from "../../assets";

export const AboutPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh]">
        <div
          style={{ backgroundImage: `url(${bgAbout})` }}
          className="w-full h-[25rem] px-5 widescreen:px-[10rem] bg-center bg-cover relative"
        >
          <div className="w-[full] relative font-primary">
            <div className="absolute bg-gradient-to-b from-black via-[#132A29] to-[#192E2D]  ... w-full mt-[20rem] px-7 py-8 rounded-xl shadow-xl">
              <div className="text-oranges">About Us</div>
              <div className="text-4xl font-semibold text-white">
                Builders Company
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
        <div className="flex justify-center items-center text-white font-primary">
          <h1 className="mt-[10rem]">About Page</h1>
        </div>
      </div>
    </>
  );
};
