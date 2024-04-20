import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div class="bg-gradient-to-b from-cyan-600 via-cyan-800 to-black  ... relative h-[100vh]">
        <div className="text-5xl text-black py-[10rem] flex flex-col justify-center items-center">
          <Fade duration={2000} direction="up" cascade={true}>
            <div className="font-primary text-5xl text-white mt-[20rem] font-bold">
              Your Vision, Your Branding Solution
            </div>
            <button
              className="p-3 bg-black text-white text-xl rounded-xl mt-4 "
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
