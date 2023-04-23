import React, { useState } from "react";

export const TaskDetails = ({ task, onEdit, onDelete, onGoBack }) => {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(
    task.description
  );
  const [editedTaskTime, setEditedTaskTime] = useState(task.time);

  const handleEdit = (event) => {
    event.preventDefault();

    const editedTask = {
      id: task.id,
      name: editedTaskName,
      description: editedTaskDescription,
      time: editedTaskTime,
    };
    onEdit(editedTask);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(task.id);
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
        <button onClick={onGoBack}>Go Back</button>
      </form>
    </div>
  );
};
