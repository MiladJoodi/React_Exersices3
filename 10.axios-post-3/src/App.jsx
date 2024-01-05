import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Config from "./Components/Config";
import Login from "./Components/Login";

export default function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>


  );
}
