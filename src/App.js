import React from "react";
import ReactDOM from "react-dom/client";
import HeaderArea from "./headerArea";
import Hero from "./hero";
import AlgoArea from "./algoArea";
import LinearSearchArea from "./linearSearchArea";

function App(){

    return(<>
    <HeaderArea/>
    <Hero/>
    <AlgoArea/>
    <LinearSearchArea/>
    
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);