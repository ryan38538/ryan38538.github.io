import React from "react";

const Task = ({ text, id, completed }) => {
  return (
    <div className="">
      <p>{text}</p>
      <p>{id}</p>
      <p>{completed}</p>
    </div>
  );
};

export default Task;
