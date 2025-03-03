import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import linearSearchDataList, {
  LinearDescription,
} from "../utils/linearSearchDataList";
import SyntaxHighlighter from "../components/syntaxHighlighter";
import { useNavigate } from "react-router";

export default function LinearSearchArea() {
  const [selectedId, setSelectedId] = useState(null);
  let Navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] medium:pt-[100.8px] small:pt-[80.8px] pt-[65.8px] bg-primary">
        <div className="small:h-20 bg-primary large:mx-16 medium:mx-8 mx-4 rounded-[5px] flex flex-wrap small:flex-nowrap small:flex-row justify-between items-center  medium:px-16 px-8 py-2 gap-1 small:border-5 border-3 border-white">
          {/*Generating Number of Code-Cards*/}

          {linearSearchDataList.map((card) => {
            return (
              <motion.div
                draggable="true"
                initial={{ borderRadius: 5, opacity: 1 }}
                exit={{ opacity: 1 }}
                whileHover={{ scale: 1.3 }}
                onClick={() => setSelectedId(card.id)}
                layoutId={`element-${card.id}`}
                key={card.id}
                className="bg-primary  text-white large:px-10 medium:px-4 px-2 small:pt-[.3rem] pt-0.5 rounded-[5px] text-center cursor-pointer medium:text-3xl small:text-2xl text-xl "
              >
                {card.title}
              </motion.div>
            );
          })}

          {/*Expanding Card on Click of Codes*/}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="z-50 w-[100%] h-[100%] fixed top-0 left-0 rounded-[5px] bg-overlayTransparent flex justify-center items-center"
              >
                <motion.div
                  initial={{ borderRadius: 5 }}
                  animate={{ borderRadius: 10 }}
                  exit={{ borderRadius: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-[75vw] h-[80vh] absolute flex flex-col   justify-center items-center mt-[60.8px] bg-primary"
                  layoutId={`element-${selectedId}`}
                >
                  <div className="small:text-5xl text-2xl shadow-2xl w-[100%] flex items-center extrasmall:justify-between justify-center gap-12 px-[6rem] py-[.5rem]">
                    <div className="h-full flex items-center justify-center">{` ${
                      linearSearchDataList.find(
                        (data) => data.id === selectedId
                      )?.title
                    }`}</div>

                    {/*SyntaxHighlighter on Opening Code*/}

                    <SyntaxHighlighter
                      code={`${
                        linearSearchDataList.find(
                          (data) => data.id === selectedId
                        )?.generalLanguage
                      }`}
                      language={`${
                        linearSearchDataList.find(
                          (data) => data.id === selectedId
                        )?.extension
                      }`}
                    />
                  </div>

                  <pre className=" line-numbers text-white whitespace-pre-wrap overflow-y-auto py-[2rem] w-[100%] large:px-[3rem] medium:px-4">
                    <code
                      className={`language-${
                        linearSearchDataList.find(
                          (data) => data.id === selectedId
                        )?.extension
                      }`}
                    >{`${
                      linearSearchDataList.find(
                        (data) => data.id === selectedId
                      )?.generalLanguage
                    }`}</code>
                  </pre>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col bg-primary large:mx-16 medium:mx-8 mx-4 rounded-[5px] medium:mt-10 mt-4 p-2 small:border-5 border-3 border-white">
          <div className="text-4xl font-bold">Linear Search</div>
          <div className="small:text-xl text-lg">
            {/*LinearAlgoData*/}

            <LinearDescription />

            {/*Start Magic Button*/}

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                Navigate(`/algos`);
              }}
              className="z-10 fixed bottom-16 right-20 cursor-pointer text-primary bg-accent px-6 py-1 rounded-2xl "
            >
              {/* shadow-xl border-l-5  border-t-2 border-[#0c0b0b] */}
              <div className="text-[1.8rem] h-8">Start</div>
              <div className="text-[2rem]">MAGIC</div>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
