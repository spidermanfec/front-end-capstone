import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

//IMPORTING SCSS STYLE:
import "./index.scss";
//IMPORTING IMAGES:
//import hello from "./images/helloworld.gif";
//USING IMAGES:
//<img src={hello} alt='hello world animated' />

const App = () => {
  return <h1>Hello World testing here</h1>
}

root.render(<App />);