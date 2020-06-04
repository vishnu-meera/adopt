import React from "react";
import { render } from "react-dom";
import Pet from "./components/Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 0 }, "Adopt Me!"),
    React.createElement(Pet, {
      key: 1,
      name: "Luna",
      type: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      key: 2,
      name: "Boxer",
      type: "dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      key: 3,
      name: "Rocky",
      type: "dog",
      breed: "Naadan",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
