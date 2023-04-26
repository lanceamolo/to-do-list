import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TaskDetails = ({ task, setTasks }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(
    task.description
  );
  const [editedTaskTime, setEditedTaskTime] = useState(task.time);

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

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Task Details</h1>

      <form onSubmit={handleEdit}>
        <label>
          Task:
          <input
            type="text"
            value={editedTaskName}
            onChange={(event) => setEditedTaskDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="textarea"
            value={editedTaskDescription}
            onChange={(event) => setEditedTaskDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={editedTaskTime}
            onChange={(event) => setEditedTaskTime(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleGoBack}>Go Back</button>
      </form>
    </div>
  );
};
