import React,{useState} from "react";
import { render } from "react-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Router, Link } from "@reach/router";
import ThemeContext from './context/ThemeContext';
const App = () => {
  const theme = useState("orange");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>

  );
};

render(<App />, document.getElementById("root"));
