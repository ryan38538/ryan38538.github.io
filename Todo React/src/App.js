import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

// task = Apij

function App() {
  const api = "c9facb-aa93ff-9f9a38-41f65b-8b126c";
  // let tasks = [
  //   { text: "Task 1", id: "0", completed: true },
  //   { text: "Task 2", id: "1", completed: false },
  //   { text: "Task 3", id: "2", completed: true },
  // ];
  const [todos, setTodos] = useState([]);

  const pullTodos = () => {
    console.log("Pull from API");
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let apiTodos = JSON.parse(this.responseText);
        setTodos(apiTodos);
      }
    };
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key", api);
    xhttp.send();
  };
  useEffect(() => {
    pullTodos();
  }, []);

  // const [test, setTest] = useState("hi");

  return (
    <div className="App">
      <div>
        <h1 className="header">
          <p>
            <b>My todo App</b>
          </p>
        </h1>
      </div>
      <div className="content">
        <h2>ToDo List:</h2>
        <NewTodo todos={todos} setTodos={setTodos} pull={pullTodos} />

        {/* <p id="Listing" /> */}
        {todos.map((t) => (
          <Todo
            completed={t.completed}
            text={t.text}
            id={t.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
