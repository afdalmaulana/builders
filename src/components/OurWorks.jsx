import { useState, useEffect, useRef } from "react";
import { works } from "../constants";

export const OurWorks = () => {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const worksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(false);
        }
      },
      {
        threshold: 0.1, // 10% of the component is visible
      }
    );

    observer.observe(worksRef.current);

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black via-[#132A29] to-[#192E2D] ... relative py-8 font-primary">
        <div className="text-black flex flex-col justify-center items-center ">
          <div className="font-primary text-xl widescreen:text-5xl text-white font-bold">
            Our Works
          </div>
          <div ref={worksRef}>
            {loading ? (
              <div className="flex justify-center items-center py-8 text-white text-2xl">
                Please Wait
              </div>
            ) : (
              <div className="flex py-8 flex-col desktop:flex-row">
                {works.map((work, index) => (
                  <div
                    key={index}
                    className="group relative hover:scale-95 transition-transform duration-300 ease-in-out cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 py-4">
                      {work.name}
                    </div>
                    <img
                      src={work.img}
                      alt={work.name}
                      className="w-[20rem] h-[25rem]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
