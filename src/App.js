import React from "react";
import ReactDOM from "react-dom/client";
import HeaderArea from "./headerArea";
import Hero from "./hero";
import AlgoArea from "./algoArea";
import LinearSearchArea from "./linearSearchArea";
import BinarySearchArea from "./binarySearchArea";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderArea />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/algos" element={<AlgoArea />}></Route>
          <Route path="/algorithm-1" element={<LinearSearchArea />}></Route>
          <Route path="/algorithm-2" element={<BinarySearchArea />}></Route>
          {/* <Route path="/algorithm-3" element={<LinearVsBinaryArea />}></Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Route path="/1" element={<LinearSearchArea />}></Route> */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
