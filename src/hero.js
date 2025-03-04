import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Typed from "typed.js";
import { useNavigate } from "react-router";

export default function Hero() {
  const el = useRef(null);

  let Navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Code. Visualize. Conquer.",
        "Algorithms aren’t scary when you see them!! ",
        "Watch Linear Search vs Binary Search duel... ",
        "Learn faster when you watch code come alive... ",
        "Your coding superpower? Visualization...",
        "Your code journey just got a visual roadmap...",
        "Algorithms made friendly. Start exploring!",
      ],
      typeSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* calc(100vh-60.8px) */}
      <div className="h-[100vh] medium:px-16 small:px-8 px-4 pt-[124.8px] relative bg-primary">
        <div className="small:text-[5vw] text-[7vw] pt-8 ">
          <span className="small:text-[6vw] text-[8vw]">W</span>elcome To
        </div>
        <div
          draggable="true"
          id="hero-page-main-text"
          className="small:text-[8vw] extrasmall:text-[9.5vw] text-[9vw] pb-16"
        >
          ALGO - VISUALIZER
        </div>
        <span ref={el} className="large:text-[2.5rem] medium:text-3xl small:text-2xl text-lg" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            Navigate(`/algos`);
          }}
          className="fixed bottom-16 large:right-16 medium:right-10 right-5 cursor-pointer text-primary bg-accent px-4 py-1 rounded-2xl "
        >
          {/* shadow-xl border-l-5  border-t-2 border-[#0c0b0b] */}
          <div className="large:text-[1.8rem] medium:text-[1.5rem] text-[1.2rem] medium:h-8 h-6">Start</div>
          <div className="large:text-[2rem] medium:text-[1.6rem] small:text-[1.4rem] text-lg">VISUALIZING</div>
        </motion.button>
      </div>
    </>
  );
}
