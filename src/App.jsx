import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Key from './Key'
import {  Routes, Route } from 'react-router-dom';
import Home from './Home';
import { RecoilRoot } from 'recoil';
import Signature from './Signature';


function App() {
  return (
    <RecoilRoot>
    <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keys" element={<Key />} />
        <Route path="/signature" element={<Signature />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
