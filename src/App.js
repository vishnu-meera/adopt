import React from "react";
import { render } from "react-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Router, Link } from "@reach/router";
const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
