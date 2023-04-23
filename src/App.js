import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Home } from "./components/Home.jsx";
import { Create } from "./components/Create.jsx";
import { TaskDetails } from "./components/TaskDetails.jsx";
import "./App.css";

function App() {
  const [task, setTask] = useState(null);

  const handleEdit = (editedTask) => {
    // code to update the task in the list or database
    console.log("edited task:", editedTask);
  };

  const handleDelete = (taskId) => {
    // code to delete the task from the list or database
    console.log("deleted task id:", taskId);
  };

  const handleGoBack = () => {
    // code to navigate back to the previous page
    console.log("go back");
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/task/:taskId"
          element={
            <TaskDetails
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onGoBack={handleGoBack}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
