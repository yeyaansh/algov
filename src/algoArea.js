import { motion } from "motion/react";
import algoAreaLists from "../utils/algoAreaList";
import {  useNavigate } from "react-router";

export default function AlgoArea() {
  let Navigate = useNavigate();
  return (
    <>
      {/* calc(100vh-60.8px) */}
      <div className="bg-primary text-white h-[100vh] flex flex-col gap-[2rem] large:pt-[124.8px] medium:pt-[100.8px] small:pt-[80.8px] pt-[65.8px]">
        {algoAreaLists.map((card) => {
          return (
            <motion.div
              key={card.id}
              drag="x"
              dragDirectionLock
              dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
              whileHover={{ scale: 1.02 }}
              className="flex justify-between large:mx-16 medium:mx-12 small:mx-8 mx-4 rounded-[5px] medium:px-[3rem] small:px-[1.5rem] px-2 medium:h-[7rem] small:h-[5rem] h-10 items-center small:border-4 border-2 border-white"
            >
              <motion.h2 className="large:text-5xl medium:text-3xl small:text-2xl text-[1rem]">{card.title}</motion.h2>
              {/* &nbsp; FOR EXTRA SPACING */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  Navigate(`/algorithm-${card.id}`);
                }}  
                className="bg-accent text-primary large:px-[2.5rem] medium:px-[2rem] small:px-[1.2rem] px-2 large:py-[1rem] medium:py-[.8rem] small:py-[.5rem] py-0.5 rounded-[5px] cursor-pointer large:text-3xl medium:text-2xl small:text-lg text-[.8rem] hover:bg-hoverAccent"
              >
                VISUALIZE
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
