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
  
  const handleEdit = (editedTask) => {
    // code to update the task in the list or database
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t.id === editedTask.id) {
          return {
            ...t,
            name: editedTask.name,
            description: editedTask.description,
            time: editedTask.time,
          };
        }
        // if id's don't match return the task unchanged
        return t;
      });
    });
  };

  const handleDelete = (taskId) => {
    // code to delete the task from the list or database
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route
          path="/home"
          element={<Home tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/create" element={<Create />} />
        <Route
          path="/task/:taskId"
          element={
            <TaskDetails
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;