import { motion } from "framer-motion";
import { useState } from "react";
import { advert, brandingSolution } from "../constants";
export const AdvertCards = () => {
  const [expandedIndex, setExpand] = useState(null);
  const handleCardClick = (index) => {
    setExpand(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  return (
    <section className="py-2 pb-[300px] ">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <h1 className="text-3xl font-extrabold text-white">Advertisement</h1>
      </div>
      <div className="mt-12 flex flex-col tablet:flex-row justify-center items-center gap-5">
        {advert.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="collapsed"
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
            animate={expandedIndex === index ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  {item.name}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center ">{item.desc}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
