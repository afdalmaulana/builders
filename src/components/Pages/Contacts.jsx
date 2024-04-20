import { Fade } from "react-awesome-reveal";
export const Contacts = () => {
  return (
    <>
      <div class="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black  ... relative h-[100vh]">
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
            <div className="w-[35rem] bg-greys text-white rounded-lg py-6">
              <div className="px-5">
                <form action="">
                  <div className="space-y-2">
                    <div className="text-xl text-primary">Contact Us</div>
                    <input
                      type="text"
                      className="border rounded-md w-full p-2 bg-greys placeholder-black border-black"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-primary">
                    <div className="text-xl">Message</div>
                    <textarea
                      type="textarea"
                      className="w-full border h-[8rem] p-2 bg-greys rounded-md placeholder-black border-black"
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
