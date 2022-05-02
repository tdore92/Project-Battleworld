import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";
import Battleworld from "./components/Battleworld";
import About from "./components/About";
import Show from "./components/Show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/index/:heroID" element={<Show />} />
          <Route path="/battleworld" element={<Battleworld />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
