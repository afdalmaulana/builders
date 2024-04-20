import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div class="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh]">
        <div className="text-5xl text-black py-[10rem] flex flex-col justify-center items-center">
          <Fade duration={2000} direction="up" cascade={true}>
            <div className="font-primary text-5xl text-white mt-[20rem] font-bold">
              Your Vision, Your Branding Solution
            </div>
            <button
              className="px-4 py-3 bg-[#BCBFBE] text-primary text-xl rounded-xl mt-4 hover:bg-secondary hover:text-primary"
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
