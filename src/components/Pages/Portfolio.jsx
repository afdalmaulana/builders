import { useEffect } from "react";
import { CompanyProfile } from "../Portfolio/CompanyProfile";
import { WeddingInvitation } from "../Portfolio/WeddingInvitation";
import { SocialMedia } from "../Portfolio/SocialMedia";
import { Fade } from "react-awesome-reveal";

export const Portfolio = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const yOffset = -100; // Sesuaikan offsetnya agar halaman scroll ke bagian atas element yang dituju
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0); // Scroll ke atas saat komponen dimuat jika tidak ada hash
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#192E2D] via-[#132A29] to-black relative min-h-screen">
      <div className="flex justify-center items-center px-[10rem] py-[10rem]">
        <Fade cascade duration={1000} triggerOnce>
          <div className="w-full border-2 border-oranges rounded-lg flex flex-col text-white px-[5rem] py-[5rem]">
            <div>
              <div>
                <CompanyProfile />
              </div>
              <div>
                <WeddingInvitation />
              </div>
              <div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
