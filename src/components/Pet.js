import React from "react";
export default function Pet({ name, type, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, name),
    React.createElement("h2", { key: 2 }, type),
    React.createElement("h2", { key: 3 }, breed),
  ]);
}
