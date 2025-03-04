import { useState } from "react";
import linearSearchDataList from "../utils/linearSearchDataList";
import { motion, AnimatePresence } from "motion/react";
import SyntaxHighlighter from "../components/syntaxHighlighter";

function LinearInputArrayValues() {
  const [selectedId, setSelectedId] = useState(null);
 let submitValue = [];
 let targetValue = null;
  function submit() {
    if (
      document.getElementById("inputField-1").value === "" ||
      document.getElementById("inputField-2").value === "" ||
      document.getElementById("inputField-3").value === "" ||
      document.getElementById("inputField-4").value === "" ||
      document.getElementById("inputField-5").value === "" ||
      document.getElementById("inputField-6").value === "" ||
      document.getElementById("inputField-7").value === "" ||
      document.getElementById("inputField-8").value === "" ||
      document.getElementById("inputField-9").value === "" ||
      document.getElementById("inputField-10").value === "" ||
      document.getElementById("targetField").value === ""
    ) {
      alert("Enter Array Values in Array!");
    }

    else if(submitValue ){
      submitValue.push(Number(document.getElementById("inputField-1").value));
      submitValue.push(Number(document.getElementById("inputField-2").value));
      submitValue.push(Number(document.getElementById("inputField-3").value));
      submitValue.push(Number(document.getElementById("inputField-4").value));
      submitValue.push(Number(document.getElementById("inputField-5").value));
      submitValue.push(Number(document.getElementById("inputField-6").value));
      submitValue.push(Number(document.getElementById("inputField-7").value));
      submitValue.push(Number(document.getElementById("inputField-8").value));
      submitValue.push(Number(document.getElementById("inputField-9").value));
      submitValue.push(Number(document.getElementById("inputField-10").value));
      targetValue = (Number(document.getElementById("targetField").value));

      alert(`Array is:${submitValue} and Target Value is:${targetValue}`);


    }
  }

  function clearAll() {
    document.getElementById("inputField-1").value = "";
    document.getElementById("inputField-2").value = "";
    document.getElementById("inputField-3").value = "";
    document.getElementById("inputField-4").value = "";
    document.getElementById("inputField-5").value = "";
    document.getElementById("inputField-6").value = "";
    document.getElementById("inputField-7").value = "";
    document.getElementById("inputField-8").value = "";
    document.getElementById("inputField-9").value = "";
    document.getElementById("inputField-10").value = "";
    document.getElementById("targetField").value = "";

    submitValue = [];

  }

  function restoreDefault() {
    document.getElementById("inputField-1").value = 1;
    document.getElementById("inputField-2").value = 2;
    document.getElementById("inputField-3").value = 3;
    document.getElementById("inputField-4").value = 4;
    document.getElementById("inputField-5").value = 5;
    document.getElementById("inputField-6").value = 6;
    document.getElementById("inputField-7").value = 7;
    document.getElementById("inputField-8").value = 8;
    document.getElementById("inputField-9").value = 9;
    document.getElementById("inputField-10").value = 10;
  }

  const valueList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];

  return (
    <>
      <div className="bg-overlayTransparent h-[100vh] pt-[100.8px] text-center overflow-hidden">
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
                      } `}
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
        <div className="flex justify-center mt-8">
          <div className="flex flex-col justify-center gap-6 ">
            {
              <div className="flex gap-2 py-4 bg-secondary w-fit px-4 rounded-[5px] justify-center">
                {valueList.map((card) => {
                  return (
                    <>
                      <div
                        key={card.id}
                        className="border-3 border-white rounded-[5px]"
                      >
                        <input
                        key={card.id}
                          required
                          type="text"
                          placeholder={card.id}
                          id={`inputField-${card.id}`}
                          className="w-[7rem] h-[2rem] text-center text-2xl  border-transparent"
                        ></input>
                      </div>
                    </>
                  );
                })}
              </div>
            }
            <div className="flex gap-4 items-center">
              <div>
                <input
                  type="text"
                  id="targetField"
                  required
                  className="border-2 border-white text-xl rounded-[5px] text-center py-1"
                  placeholder="Enter Target Value"
                ></input>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearAll}
                  className="bg-red-500 px-4 py-1 rounded-[5px] text-xl text-white hover:bg-red-600 cursor-pointer"
                >
                  Clear All
                </button>

                <button
                  onClick={restoreDefault}
                  className="bg-yellow-500 px-4 py-1 rounded-[5px] text-xl text-white hover:bg-yellow-600 cursor-pointer"
                >
                  Restore to Default
                </button>

                <button
                  onClick={()=>{
                    if(submitValue.length === 0 || targetValue === "")
                    {
                      submit();
                      
                    }
                  }}
                  className="bg-accent px-4 py-1 rounded-[5px] text-xl text-primary hover:bg-hoverAccent cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinearInputArrayValues;
