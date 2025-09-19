import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Key from "./Key";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { RecoilRoot } from "recoil";
import Signature from "./Signature";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <RecoilRoot>
      <div className="root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keys" element={<Key />} />
          <Route path="/signature" element={<Signature />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
