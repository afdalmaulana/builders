import { useEffect, useState } from "react";
import { navItems } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="w-full fixed top-0 right-0 text-white mobile:bg-transparent  z-20">
      <div
        className={`flex justify-between widescreen:px-[6rem] desktop:px-[3rem] px-8 ${
          isSticky
            ? "sticky top-0 left-0 right-0 py-1 border-b text-black bg-white duration-300"
            : "py-12"
        }`}
      >
        <div className="w-full flex justify-between py-2 pr-[9.5rem] z-10">
          <div className="ml-[5rem]">
            {isSticky ? (
              <div className="text-3xl text-primary font-primary">Builders</div>
            ) : (
              <div className="text-4xl text-white font-primary">Builders</div>
            )}
          </div>
          <ul className="flex space-x-8 py-4 ">
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={`${item.path}`}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-primary text-white px-4 py-3 mt-1 ml-5 rounded-full">
              Contact Us
            </button>
          </div>
          <div className="mt-5 text-2xl ml-4 tablet:hidden ">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? "" : <GiHamburgerMenu size={30} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
