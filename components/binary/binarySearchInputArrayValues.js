import { useState } from "react";
import BinaryGame from "./binaryGame";
let submitValue = [];
let targetValue = null;
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
export default function BinarySearchInputArrayValue() {
  const [selectedId, setSelectedId] = useState(null);
  const [opened, setOpened] = useState(false);
  // submit function
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
    } else if (submitValue) {
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
      targetValue = Number(document.getElementById("targetField").value);

      setOpened(true);
    }
  }
  // clear function
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
    setOpened(false);
  }
  // restore function
  function restoreDefault() {
    document.getElementById("inputField-1").value = 11;
    document.getElementById("inputField-2").value = 23;
    document.getElementById("inputField-3").value = 34;
    document.getElementById("inputField-4").value = 45;
    document.getElementById("inputField-5").value = 51;
    document.getElementById("inputField-6").value = 69;
    document.getElementById("inputField-7").value = 71;
    document.getElementById("inputField-8").value = 86;
    document.getElementById("inputField-9").value = 98;
    document.getElementById("inputField-10").value = 100;
    document.getElementById("targetField").value = 71;
  }

  return (
    <>
      {/* {main box} */}
      <div className="bg-primary h-[100vh] pt-[0px] small:pt-[30.8px] text-center">
        <div className="flex justify-center mt-8">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="flex text-left w-[100%] small:px-0 mx-18 px-18">
              <h3 className="text-xl small:text-3xl h-2 small:h-6">Enter Array Values</h3>
            </div>
            {/* array values boxes using map function */}
            {
              <div className="flex flex-wrap small:mx-0 mx-18 gap-1 small:gap-2 py-2 small:py-4 bg-secondary w-fit px-2 small:px-4 rounded-[5px] items-center justify-center">
                {valueList.map((card) => {
                  return (
                    <>
                      <div
                        key={card.id}
                        className="border-2 small:border-3 border-white rounded-[5px]"
                      >
                        <input
                          required
                          type="text"
                          placeholder={card.id}
                          id={`inputField-${card.id}`}
                          className="large:w-[5vw] medium:w-[6vw] small:w-[7vw] w-[2.5rem] h-[2rem] text-center text-xl small:text-2xl  border-transparent"
                        ></input>
                      </div>
                    </>
                  );
                })}
              </div>
            }
            <div>
              {/* functional buttons second row */}
              <div className="flex small:flex-row flex-col gap-4 items-center">
                {/* enter value text field box */}
                <div>
                  <input
                    type="text"
                    id="targetField"
                    required
                    className="border-2 border-white text-[.95rem] small:text-xl rounded-[5px] text-center py-1"
                    placeholder="Enter Target Value"
                  ></input>
                </div>
                <div className="flex flex-col small:flex-row gap-2 small:w-fit w-full">
                  {/* reset button */}
                  <button
                    onClick={clearAll}
                    className="bg-red-500 px-4 py-1 rounded-[5px] text-[.95rem] small:text-xl text-white hover:bg-red-600 cursor-pointer"
                  >
                    Reset
                  </button>
                  {/* restore button */}
                  <button
                    onClick={() => {
                      restoreDefault();
                    }}
                    className="bg-yellow-500 px-4 py-1 rounded-[5px] text-[.95rem] small:text-xl text-white hover:bg-yellow-600 cursor-pointer"
                  >
                    Default
                  </button>
                  {/* run button */}
                  <button
                    onClick={() => {
                      if (submitValue.length === 0 || targetValue === "") {
                        submit();
                      }
                    }}
                    className="bg-accent px-4 py-1 rounded-[5px] text-[.95rem] small:text-xl text-primary hover:bg-hoverAccent cursor-pointer"
                  >
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SearchRace array={submitValue} target={targetValue} /> */}
        {opened && <BinaryGame array={submitValue} target={targetValue} />}
      </div>
    </>
  );
}
