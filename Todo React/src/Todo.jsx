import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ completed, text, id, todos, setTodos }) => {
  const api = "c9facb-aa93ff-9f9a38-41f65b-8b126c";

  const [localCompleted, setLocalCompleted] = useState(completed);
  let clickComplete = () => {
    const newVal = !localCompleted;
    setLocalCompleted(newVal);
    const data = {
      completed: newVal,
    };

    let xhttp4 = new XMLHttpRequest();
    // console.log("task_id!");

    // document.getElementById(task_id).style.textDecoration = "line-through";
    xhttp4.open("PUT", `https://cse204.work/todos/${id}`, true);
    xhttp4.setRequestHeader("Content-type", "application/json");
    xhttp4.setRequestHeader("x-api-key", api);
    xhttp4.send(JSON.stringify(data));
  };

  let removeTask = () => {
    let temp = JSON.parse(JSON.stringify(todos));
    console.log(temp);
    let filtered = temp.filter((t) => t.id != id);
    console.log(filtered);
    setTodos(filtered);
    let xhttp2 = new XMLHttpRequest();

    xhttp2.open("DELETE", `https://cse204.work/todos/${id}`, true);
    xhttp2.setRequestHeader("x-api-key", api);
    xhttp2.send();
  };

  return (
    <div className="item" id={id}>
      <button className="delete-button" onClick={removeTask}>
        Delete
      </button>
      <input
        id="checkbox"
        className="checkbox"
        type="checkbox"
        onClick={clickComplete}
        onChange={clickComplete}
        checked={localCompleted}
      />
      <p
        id="TheList"
        style={{ textDecoration: localCompleted ? "line-through" : "" }}
      >
        {text}{" "}
      </p>
    </div>
  );
};

export default Todo;
