import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
export const Footer = () => {
  return (
    <>
      <div className="w-full font-primary bg-zinc-900 text-white">
        <div className="py-8 px-10">
          <div className="grid grid-rows-1 desktop:grid-cols-3 gap-8">
            <div>
              <h1 className="capitalize text-4xl">Get To Know Us</h1>
              <p className="mt-5 text-sm desktop:pr-[5rem]">
                Let's Build Something Together - Contact Us Now to Discuss Your
                Vision for a Better Future. We're eager to collaborate with you,
                offering tailored solutions for your branding and social media
                needs. Reach out to us today and let's embark on this exciting
                journey towards achieving your goals together.
              </p>
            </div>
            <div className="space-y-4">
              <div>Contact Us</div>
              <div className="flex space-x-5">
                <IoMdMail size={28} />
                <p>afdalmaulanaaa@gmail.com</p>
              </div>
              <div className="flex space-x-5">
                <FaPhoneAlt size={28} />
                <p>+6281 2421 4977</p>
              </div>
              <div>Location</div>
              <div className="flex space-x-5">
                <MdLocationPin size={28} />
                <div>Makassar, Sulawesi Selatan, Indonesia</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>Find Us On Social Media</div>
              <div className="flex space-x-8">
                <FaInstagram size={38} />
                <FaLinkedin size={38} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-center bg-oranges py-5">
            Copyright © 2024 - Muh. Afdal Maulana Said
          </p>
        </div>
      </div>
    </>
  );
};
