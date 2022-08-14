import React, { useState } from "react";
import "./App.css";

function NewTodo({ todos, setTodos, pull }) {
  const api = "c9facb-aa93ff-9f9a38-41f65b-8b126c";
  let [value, setValue] = useState("");
  const submit = () => {
    // append to list
    let temp = JSON.parse(JSON.stringify(todos));
    temp.push({ text: value, completed: false, id: -1 });
    setTodos(temp);
    setValue("");
    // send to api
    var xhttp2 = new XMLHttpRequest();
    xhttp2.open("POST", "https://cse204.work/todos", true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    xhttp2.send(JSON.stringify({ text: value }));
    console.log("its there!");
    setTimeout(pull, 0.5);
  };

  function PressEnter(event) {
    if (event.keyCode === 13) {
      submit();
    }
  }
  return (
    <div>
      <input
        type="text"
        id="Type-box"
        // onKeyUp="PressEnter(event)"
        placeholder="Type Here"
        value={value}
        onKeyUp={PressEnter}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" id="submit" onClick={() => submit()}>
        Submit
      </button>
    </div>
  );
}

export default NewTodo;
