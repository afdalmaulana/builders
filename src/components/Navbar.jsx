import { useEffect, useState } from "react";
import { navItems } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { builders } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isService, setIsService] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    setIsAbout(location.pathname === "/about");
    setIsHome(location.pathname === "/");
    setIsPortfolio(location.pathname === "/portfolio");
    setIsClient(location.pathname === "/client");
    setIsService(location.pathname === "/ourService");
  }, [location.pathname]);
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
    <div className="w-full fixed top-0 right-0 text-white mobile:bg-transparent  z-20 font-primary">
      <div
        className={`flex justify-between widescreen:px-[6rem] desktop:px-[3rem] px-8  ${
          isSticky
            ? "sticky top-0 left-0 right-0 py-2 border-b text-black bg-white duration-300"
            : "py-12"
        }`}
      >
        <div className="w-full flex justify-between pr-[2rem]  ">
          <div className="ml-[1rem]">
            {isSticky ? (
              <div className="text-3xl text-primary font-primary flex py-2 space-x-3">
                <img
                  src={builders}
                  alt="build"
                  className="w-[2.5rem] h-[2.5rem]"
                />
                <div>Builders</div>
              </div>
            ) : (
              <div className="text-3xl text-white font-primary flex space-x-3">
                <img
                  src={builders}
                  alt="build"
                  className="w-[2.5rem] h-[2.5rem]"
                />
                <div>Builders</div>
              </div>
            )}
          </div>
          <ul className="hidden tablet:flex tablet:gap-3 tablet:text-sm desktop:gap-6 widescreen:gap-10 py-5 ">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <a
                  href={`${item.path}`}
                  className={`${
                    isAbout && item.path === "/about" ? "text-oranges" : ""
                  }
                    ${isHome && item.path === "/" ? "text-oranges" : ""} ${
                    isPortfolio && item.path === "/portfolio"
                      ? "text-oranges"
                      : ""
                  } ${
                    isClient && item.path === "/client" ? "text-oranges" : ""
                  } ${
                    isService && item.path === "/ourService"
                      ? "text-oranges"
                      : ""
                  } z-10 relative hover:after:hover:before:block pb-2`}
                >
                  {item.name}
                  <span className="after"></span>
                  <span className="before"></span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              className="hidden tablet:block bg-oranges text-primary px-5 py-3 mt-1 ml-5 rounded-full hover:bg-secondary hover:text-primary "
              onClick={() => handleClick()}
            >
              Contact Us
            </button>
          </div>
          <div className="mt-1 text-2xl tablet:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? "" : <GiHamburgerMenu size={30} />}
            </button>
          </div>
        </div>
        <HamburgerMenu navbar={navbar} setNavbar={setNavbar} />
      </div>
    </div>
  );
};
