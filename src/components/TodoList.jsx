// components/TodoList.js
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
