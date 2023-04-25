import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = ({ tasks, setTasks }) => {
  // const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheck = (event) => {
    const taskId = event.target.id;
    const foundTask = tasks.find((task) => task.id === taskId);

    // move foundtask into completed list
    setCompletedTasks((prevState) => [...prevState, foundTask]);

    // remove foundTask from the original task array
    setTasks((prevState) =>
      prevState.filter((foundTask) => foundTask.id !== taskId)
    );
  };

  const activeTaskList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <label>
          <input type="checkbox" id={task.id} onChange={handleCheck} />
          <Link to={`/taskDetails/${task.id}`}>{task.name}</Link>
        </label>
      </li>
    );
  });

  const completedTaskList = completedTasks.map((task) => (
    <li key={task.id}>
      <label>
        <input type="checkbox" checked disabled />
        {task.name}
      </label>
    </li>
  ));

  // empty state
  if (tasks.length === 0) {
    return (
      <div>
        <h1>Things to do:</h1>
        <Link to="/create">Let's add to your list...</Link>
      </div>
    );
  }

  // home w/ tasks
  return (
    <div>
      <h1>Things to do:</h1>
      <Link to="/create">+</Link>
      <ul>{activeTaskList}</ul>
      <h2>Completed tasks:</h2>
      <ul>{completedTaskList}</ul>
    </div>
  );
};
