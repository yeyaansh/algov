import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LinearGame = ({ array, target }) => {
  const [linearIndex, setLinearIndex] = useState(0);
  const [found, setFound] = useState({
    linear: false,  notFound: false,
  });

  useEffect(() => {
    if (linearIndex < array.length && !found.linear) {
      const timer = setTimeout(() => {
        if (array[linearIndex] === target) {
          setFound((prev) => ({ ...prev, linear: true }));
        } else {
          setLinearIndex((prev) => prev + 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [linearIndex, array, target, found.linear]);

  useEffect(() => {
    if (found.linear === false && linearIndex >= array.length) {
      setFound((prev) => ({ ...prev, notFound: true }));
    }
  }, [found.linear, linearIndex]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-15 mx-14">
      <div className="flex gap-1 small:gap-2">
      {array.map((num, idx) => (
          <motion.div
            key={idx}
            className={`p-4 border rounded-md text-center w-4 small:w-10 h-4 small:h-10 flex items-center justify-center ${
              linearIndex === idx ? "bg-secondary text-white" : "bg-primary"
            }`}
          >
            {num}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="relative right-[8.4rem] text-sm small:right-55 small:mb-16 px-1 small:px-3 py-1 bg-secondary text-white rounded-md"
        animate={{
          x:
            linearIndex < array.length
              ? linearIndex * 30
              : (array.length - 1) * 30,
        }}
      >
        Linear Search
      </motion.div>



      {found.linear && (
        <div className="text-xl text-secondary">
          Linear Search Found the Target!
        </div>
      )}

      {found.notFound && (
        <div className="text-xl  text-red-600 ">❌ Target Not Found!</div>
      )}
    </div>
  );
};

export default LinearGame;
