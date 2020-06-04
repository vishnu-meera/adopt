const Pet = ({ name, type, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, name),
    React.createElement("h2", { key: 2 }, type),
    React.createElement("h2", { key: 3 }, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
