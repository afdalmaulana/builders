import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { people } from "../../assets";

export const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh]">
        <div className="text-5xl text-black py-[10rem] flex flex-col justify-center items-center">
          <Fade duration={2000} direction="up" cascade={true}>
            <img
              src={people}
              alt="people"
              className="w-[20rem] h-[15rem] widescreen:w-[35rem] widescreen:h-[25rem]"
            />
            <div className="font-primary text-xl widescreen:text-5xl mt-5 widescreen:mt-0 text-white font-bold">
              With your finger, we can build a future
            </div>
            <div className="text-oranges text-lg widescreen:text-xl font-primary font-light mt-4"></div>
            <button
              className="px-10 py-3 bg-oranges text-primary text-xl rounded-xl mt-4 hover:bg-secondary hover:text-primary"
              onClick={() => handleClick()}
            >
              Get Started
            </button>
          </Fade>
        </div>
      </div>
    </>
  );
};
