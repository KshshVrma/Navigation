import React from "react";
// import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/about">about</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="/about" component={AboutPage} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
