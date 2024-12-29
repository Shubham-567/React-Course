import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk 1 kilometer",
  ]);

  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // To store the type of message (success or error)
  const messageTimeout = useRef(null);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function showMessage(tempMessage, type) {
    setMessage(tempMessage);
    setMessageType(type); // Set the message type (success or error)

    // Clear any existing timeout
    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
    }

    // Set a new timeout to clear the message after 4 seconds
    messageTimeout.current = setTimeout(() => {
      setMessage("");
      setMessageType(""); // Clear the message type
      messageTimeout.current = null;
    }, 4000);
  }

  function AddTask() {
    // Check if input is empty or not
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);

      showMessage("Task added successfully.", "success");

      // Reset input
      setNewTask("");
    } else {
      showMessage("Please enter a task.", "error");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);

    setTasks(updatedTasks);
    showMessage("Task deleted successfully.", "success");
  }

  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>

      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />

        <button className='add-button' onClick={AddTask}>
          Add
        </button>
      </div>

      <p id='message' className={messageType}>
        {message}
      </p>

      <ol>
        {tasks
          .slice()
          .reverse()
          .map((task, index) => (
            <li key={index}>
              <div className='checkbox-wrapper task-text'>
                <input
                  className='checkbox-input'
                  id={`checkbox-${index}`}
                  type='checkbox'
                  style={{ display: "none" }} // Hidden checkbox
                  aria-label={`Task: ${task}`} //for accessibility
                />
                <label className='checkbox-label' htmlFor={`checkbox-${index}`}>
                  <div className='checkbox-icon-container'>
                    <span className='checkbox-icon'>
                      <svg width='12px' height='9px' viewBox='0 0 12 9'>
                        <polyline points='1 5 4 8 11 1'></polyline>
                      </svg>
                    </span>
                    <span className='checkbox-text'>{task}</span>
                  </div>
                </label>
              </div>

              <button
                className='delete-button'
                onClick={() => deleteTask(tasks.length - 1 - index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default ToDoList;
