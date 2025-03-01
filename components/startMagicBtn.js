import {motion} from "motion/react";
import { useNavigate } from "react-router";

export default function StartMagicBtn(){
    let Navigate = useNavigate();
    return(<>

<motion.button
          whileHover={{ scale: 1.1 }}
          onClick={()=>{ Navigate(`/algos`);
                }}
          className="z-10 fixed bottom-16 right-20 cursor-pointer text-primary bg-accent px-6 py-1 rounded-2xl "
        >
          {/* shadow-xl border-l-5  border-t-2 border-[#0c0b0b] */}
          <div className="text-[1.8rem] h-8">Start</div>
          <div className="text-[2rem]">MAGIC</div>
        </motion.button>

    </>)
}