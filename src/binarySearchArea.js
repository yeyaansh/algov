import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import binarySearchDataList, {BinaryDescription} from "../utils/binarySearchDataList";
import SyntaxHighlighter from "../components/syntaxHighlighter";
import { useNavigate } from "react-router";

export default function BinarySearchArea() {
  const [selectedId, setSelectedId] = useState(null);
  let Navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] pt-[100.8px] bg-primary">
        <div className="h-20 bg-primary mx-16 rounded-[5px] flex justify-between items-center px-16 border-5 border-white">
          {/*Generating Number of Code-Cards*/}

          {binarySearchDataList.map((card) => {
            return (
              <motion.div
                draggable="true"
                initial={{ borderRadius: 5, opacity: 1 }}
                exit={{ opacity: 1 }}
                whileHover={{ scale: 1.3 }}
                onClick={() => setSelectedId(card.id)}
                layoutId={`element-${card.id}`}
                key={card.id}
                className="bg-primary  text-white px-[2.5rem] py-[.3rem] rounded-[5px]  cursor-pointer text-3xl "
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
                  className="w-[70%] h-[80%] absolute flex flex-col   justify-center items-center mt-[60.8px] bg-primary"
                  layoutId={`element-${selectedId}`}
                >
                  <div className="text-[3rem]  shadow-2xl w-[100%] flex items-center justify-between px-[6rem] py-[.5rem]">
                    <div>{` ${
                      binarySearchDataList.find(
                        (data) => data.id === selectedId
                      )?.title
                    }`}</div>

                    {/*SyntaxHighlighter on Opening Code*/}

                    <SyntaxHighlighter
                      code={`${
                        binarySearchDataList.find(
                          (data) => data.id === selectedId
                        )?.generalLanguage
                      }`}
                      language={`${
                        binarySearchDataList.find(
                          (data) => data.id === selectedId
                        )?.extension
                      }`}
                    />
                  </div>

                  <pre className=" line-numbers text-white overflow-y-auto py-[2rem] w-[100%] px-[3rem]">
                    <code
                      className={`language-${
                        binarySearchDataList.find(
                          (data) => data.id === selectedId
                        )?.extension
                      }`}
                    >{`${
                      binarySearchDataList.find(
                        (data) => data.id === selectedId
                      )?.generalLanguage
                    }`}</code>
                  </pre>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-3 bg-primary mx-16 rounded-[5px] mt-10 p-2 border-5 border-white">
          <div className="text-4xl font-bold">Binary Search</div>
          <div className="text-2xl ">
            {/*BinaryAlgoData*/}

            <BinaryDescription />

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
