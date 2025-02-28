import { motion } from "motion/react";
import algoAreaLists from "../utils/algoAreaList";

export default function AlgoArea() {
  return (
    <>
      {/* calc(100vh-60.8px) */}
      <div className="bg-primary text-white h-[100vh] flex flex-col gap-[2rem] pt-[124.8px]">
        {algoAreaLists.map((card) => {
          return (
            <motion.div
              key={card.id}
              drag="x"
              dragDirectionLock
              dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
              whileHover={{ scale: 1.02 }}
              className="flex justify-between mx-16 rounded-[5px] px-[3rem] h-[7rem] items-center border-4 border-white"
            >
              <motion.h2 className="text-7xl">{card.title}</motion.h2>
              {/* &nbsp; FOR EXTRA SPACING */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-accent text-primary px-[2.5rem] py-[1rem] rounded-[5px] cursor-pointer text-3xl hover:bg-hoverAccent"
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
