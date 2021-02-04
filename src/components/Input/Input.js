import React, { useState } from "react";
import classes from "./Input.module.css";

let id = 6;

function Input(props) {
  const [addInput, setAddInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!addInput) return;
    const todo = {
      id: id,
      description: addInput,
      completed: false,
    };
    // props.setTodos(props.todos.concat(todo));
    // props.onHandleAddToList(todo);
    props.onHandleAddToList(todo);
    setAddInput("");
    id++;
  };

  return (
    <section className={classes.Input}>
      <form onSubmit={handleAddTodo} autoComplete="off">
        <input
          type="text"
          name="add"
          id="add"
          placeholder="Enter your new task..."
          value={addInput}
          onChange={(e) => setAddInput(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Input;
