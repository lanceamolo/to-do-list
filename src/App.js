import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import { Home } from "./components/Home.jsx";
import { Create } from "./components/Create.jsx";
import { TaskDetails } from "./components/TaskDetails.jsx";
import "./App.css";

function App() {
  const [task, setTask] = useState({
    name: "",
    description: "",
    id: "",
    time: "",
  });

  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={<Home tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/create" element={<Create />} />
        <Route
          path="/task/:taskId"
          element={<TaskDetails task={task} setTasks={setTasks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
