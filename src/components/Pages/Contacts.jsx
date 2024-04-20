import { Fade } from "react-awesome-reveal";
export const Contacts = () => {
  return (
    <>
      <div class="bg-gradient-to-b from-cyan-400 via-cyan-800 to-black  ... relative h-[100vh]">
        <div className="text-black py-[10rem] flex space-x-4 justify-evenly px-[12rem]">
          <Fade duration={2000} direction="left" cascade={true}>
            <div className="font-primary">
              <div className="font-primary text-5xl text-white font-bold  w-[32rem]">
                Let's Work Together
              </div>
              <div className="mt-3 font-semibold">
                Let's Build Something Together - Contact Us Now to Discuss Your
                Vision to better Future
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="right" cascade={true}>
            <div className="w-[35rem] bg-primary text-white rounded-lg py-6">
              <div className="px-5">
                <form action="">
                  <div className="space-y-2">
                    <div className="text-xl text-black">Contact Us</div>
                    <input
                      type="text"
                      className="border rounded-md w-full p-2 bg-primary placeholder-black border-black"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-black">
                    <div className="text-xl">Message</div>
                    <textarea
                      type="textarea"
                      className="w-full border h-[8rem] p-2 bg-primary rounded-md placeholder-black border-black"
                      placeholder="I want to work together"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
