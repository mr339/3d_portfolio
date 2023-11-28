import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/about" element={"about"} />
          <Route path="/projects" element={"projects"} />
          <Route path="/contact" element={"contact"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
