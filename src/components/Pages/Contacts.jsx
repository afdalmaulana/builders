import { Fade } from "react-awesome-reveal";
import { Footer } from "../Footer";
export const Contacts = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh]">
        <div className="text-black py-[5rem] desktop:py-[10rem] flex flex-col desktop:flex-row desktop:space-x-8 justify-evenly  px-5 desktop:px-[10rem]">
          <Fade duration={2000} direction="left" cascade={true}>
            <div className="font-primary mt-[6rem]">
              <div className="font-primary text-5xl text-white font-bold desktop:w-[32rem]">
                Let's Work Together
              </div>
              <div className="mt-9 font-semibold text-greys">
                We stand ready to partner with you, delivering comprehensive
                solutions for all your branding and social media requirements.
                Contact us to explore potential collaboration avenues and allow
                us to help you realize your aspirations.
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="right" cascade={true}>
            <div className="desktop:w-[35rem] bg-oranges text-white rounded-lg py-6 mt-10">
              <div className="px-5">
                <form action="">
                  <div className="space-y-2">
                    <div className="text-xl text-primary">Contact Us</div>
                    <input
                      type="text"
                      className="border rounded-md w-full p-2 bg-oranges placeholder-black border-black"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-primary">
                    <div className="text-xl">Message</div>
                    <textarea
                      type="textarea"
                      className="w-full border h-[8rem] p-2 bg-oranges rounded-md placeholder-black border-black"
                      placeholder="I Want to Work Together"
                    />
                  </div>
                  <button className="bg-primary w-full p-3 rounded-lg font-primary hover:bg-secondary hover:text-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
};
