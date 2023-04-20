import React, { useState } from "react";

export const Create = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskTime, setTaskTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      description: taskDescription,
      time: taskTime,
    };
    setTasks([...tasks, newTask]);

    // reset the taskName, taskDescription, and taskTime
    setTaskName("");
    setTaskDescription("");
    setTaskTime("");
  };

  return (
    <div>
      <h1>Let's do it.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          placeholder="Task"
          onChange={(event) => setTaskName(event.target.value)}
        />
        <br />
        <textarea
          value={taskDescription}
          placeholder="Task Description"
          onChange={(event) => setTaskDescription(event.target.value)}
        />
        <br />
        <input
          type="time"
          value={taskTime}
          onChange={(event) => setTaskTime(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};
