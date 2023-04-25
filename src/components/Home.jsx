import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styling/Home.css';

export const Home = () => {
  const [setTasks] = useState([]);
  const [setCompletedTasks] = useState([]);

  // temp dummy data
  const tasks = [
    {
      id: 1,
      name: "Clean kitchen"
    },
    {
      id: 2,
      name: "Wash car"
    }
  ];
  const completedTasks = [
    {
      id: 1,
      name: "Clean room"
    }
  ];

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
      <li className="active-li" key={task.id}>
        <label className="active-name">
          <Link to={`/taskDetails/${task.id}`}>{task.name}</Link>
        </label>
        <input className='active-checkbox' type="checkbox" id={task.id} onChange={handleCheck} />
      </li>
    );
  });

  const completedTaskList = completedTasks.map((task) => (
    <li key={task.id}>
      <label>
        {task.name}
        <input type="checkbox" checked disabled />
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
    <div id="home">
      <h1>Things to do:</h1>
      <Link to="/create">+</Link>
      <ul>{activeTaskList}</ul>
      <h2>Completed tasks:</h2>
      <ul>{completedTaskList}</ul>
    </div>
  );
};
