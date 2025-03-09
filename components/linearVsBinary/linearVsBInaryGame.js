import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LinearVsBinaryGame = ({ array, target }) => {
  const [linearIndex, setLinearIndex] = useState(0);
  const [binaryIndex, setBinaryIndex] = useState(null);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(array.length - 1);
  const [found, setFound] = useState({
    linear: false,
    binary: false,
    notFound: false,
  });
  // linear logic part
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
  // binary logic part
  useEffect(() => {
    if (low <= high && !found.binary) {
      const mid = Math.floor((low + high) / 2);
      setBinaryIndex(mid);
      const timer = setTimeout(() => {
        if (array[mid] === target) {
          setFound((prev) => ({ ...prev, binary: true }));
        } else if (array[mid] < target) {
          setLow(mid + 1);
        } else {
          setHigh(mid - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [low, high, array, target, found.binary]);
  // not found logic part
  useEffect(() => {
    if (found.binary === false && low > high) {
      setFound((prev) => ({ ...prev, notFound: true }));
    }
  }, [found.binary, low, high]);

  return (
    <div className="flex flex-col items-center space-y-6 m-6 small:mt-16">
      {/* display linear animation */}
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

      {/* display binary animation */}
      <div className="flex gap-1 small:gap-2">
        {array.map((num, idx) => (
          <motion.div
            key={idx}
            className={`p-4 border rounded-md text-center w-4 small:w-10 h-4 small:h-10 flex items-center justify-center ${
              binaryIndex === idx ? "bg-accent text-primary" : "bg-primary"
            }`}
          >
            {num}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="relative right-[8.4rem] text-sm small:right-55 small:mb-16 px-1 small:px-3 py-1 bg-accent text-primary rounded-md"
        animate={{
          x: binaryIndex !== null ? binaryIndex * 30 : (array.length - 1) * 30,
        }}
      >
        Binary Search
      </motion.div>
      {/* found or not animation */}
      {found.linear && (
        <div className="text-xl h-2 text-secondary">
          Linear Search Found the Target!
        </div>
      )}
      {found.binary && (
        <div className="text-xl text-accent">
          Binary Search Found the Target!
        </div>
      )}
      {found.notFound && (
        <div className="text-xl text-red-600 mt-4">❌ Target Not Found!</div>
      )}
    </div>
  );
};

export default LinearVsBinaryGame;
