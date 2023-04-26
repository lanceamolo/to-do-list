import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/todo-list-logo.png';
import '../styling/Home.css';

export const Home = () => {
  const [setTasks] = useState([]);
  const [setCompletedTasks] = useState([]);

  // temp dummy data
  const tasks = [
    {
      id: 1,
      name: "Clean kitchen Clean kitchen Clean kitchen Clean kitchen"
    },
    {
      id: 2,
      name: "Wash car"
    },    {
      id: 1,
      name: "Clean kitchen"
    },
    {
      id: 2,
      name: "Wash car"
    },
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
    },
    {
      id: 2,
      name: "Wash car"
    },
    {
      id: 1,
      name: "Clean room"
    },
    {
      id: 2,
      name: "Wash car"
    },    {
      id: 1,
      name: "Clean room"
    },
    {
      id: 2,
      name: "Wash car"
    }
  ];

  const handleCheck = (event) => {
    // const taskId = event.target.id;
    // const foundTask = tasks.find((task) => task.id === taskId);

    // // move foundtask into completed list
    // setCompletedTasks((prevState) => [...prevState, foundTask]);

    // // remove foundTask from the original task array
    // setTasks((prevState) =>
    //   prevState.filter((foundTask) => foundTask.id !== taskId)
    // );
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
    <li className="completed-li" key={task.id}>
      <label className="completed-name">
        {task.name}
      </label>
      <input className='completed-checkbox' type="checkbox" checked />
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
    <div id="home-content">
      <Link to="/create"><button id="add-task">+ Add Task</button></Link>
      <div id="main-list">
        <h1 id="home-headline">Things to do</h1>
        <ul id="active-list">{activeTaskList}</ul>
        <h2 id="home-completed">Completed tasks</h2>
        <ul>{completedTaskList}</ul>
      </div>
    </div>
  );
};
