import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import { Home } from "./components/Home.jsx";
import { Create } from "./components/Create.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;