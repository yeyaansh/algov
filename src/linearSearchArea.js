import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import linearSearchDataList from "../utils/linearSearchDataList";
import SyntaxHighlighter from "../components/syntaxHighlighter";
// import copyButton from "../utils/imageFolder/clipboardCopy.svg";
// import copiedButton from "../utils/imageFolder/clipboardCopied.svg";

export default function LinearSearchArea() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="h-[100vh] pt-[100.8px] bg-primary">
        <div className="h-20 bg-primary mx-16 rounded-[5px] flex justify-between items-center px-16 border-5 border-white">
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
                className="bg-primary  text-white px-[2.5rem] py-[.3rem] rounded-[5px]  cursor-pointer text-3xl "
              >
                {card.title}
              </motion.div>
            );
          })}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className=" w-[100%] h-[100%] fixed top-0 left-0 rounded-[5px] bg-overlayTransparent flex justify-center items-center"
              >
                <motion.div
                  initial={{ borderRadius: 5 }}
                  animate={{ borderRadius: 10 }}
                  exit={{ borderRadius: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-[70%] h-[80%] absolute flex flex-col   justify-center items-center mt-[60.8px] bg-primary"
                  layoutId={`element-${selectedId}`}

                  // onClick={() => setSelectedId(null)}
                >
                  <div className="text-[3rem]  shadow-2xl w-[100%] flex items-center justify-between px-[6rem] py-[.5rem]">
                    <div>{` ${
                      linearSearchDataList.find(
                        (data) => data.id === selectedId
                      )?.title
                    }`}</div>
                    {/* <SyntaxHighlighter/> */}
                    {/* <div>
                      <img src={copyButton} height="1rem"></img>
                    </div> */}
                    {/* </div> */}

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

                  <pre className=" line-numbers text-white overflow-y-auto py-[2rem] w-[100%] px-[3rem]">
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

        <div className="h-[30rem] bg-primary mx-16 rounded-[5px] mt-10 border-5 border-white"></div>
      </div>
    </>
  );
}
