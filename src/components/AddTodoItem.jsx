// components/AddTodoList.js
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodoList = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      addTodo({
        id: Date.now(),
        text: todoText,
      });
      setTodoText("");
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoList;
