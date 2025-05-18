import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToDoList() {
  const [toDoListData, setToDoList] = useState([]);

  function saveToDoItem(event) {
    event.preventDefault();
    const toDoValue = event.target.toDoItem.value.trim();
    if (toDoValue === '') {
      toast.warn('Please enter a to-do item!');
      return;
    }
    if (!toDoListData.includes(toDoValue)) {
      setToDoList([...toDoListData, toDoValue]);
      event.target.reset();
    } else {
      toast.error('Sorry, this to-do item already exists.');
    }
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">📝 To-Do List</h1>
        <hr />
      </div>

      <form onSubmit={saveToDoItem} className="mb-3">
        <div className="input-group">
          <input type="text" name="toDoItem" className="form-control" placeholder="Enter your task..." />
          <button className="btn btn-success" type="submit">Add Task</button>
        </div>
      </form>

      <ul className="list-group">
        {toDoListData.map((value, index) => (
          <ToDoItems
            key={index}
            toDoItem={value}
            index={index}
            toDoList={toDoListData}
            setToDoList={setToDoList}
          />
        ))}
      </ul>
    </div>
  );
}

function ToDoItems({ toDoItem, index, toDoList, setToDoList }) {
  const [currentStatus, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!currentStatus);
  };

  const deleteItem = (index) => {
    const filteredData = toDoList.filter((_, i) => i !== index);
    setToDoList(filteredData);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${currentStatus ? 'text-decoration-line-through text-muted' : ''}`}
      onClick={changeStatus}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      {toDoItem}
      <span
        className="badge bg-danger rounded-pill"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          deleteItem(index);
        }}
      >
        &times;
      </span>
    </li>
  );
}
