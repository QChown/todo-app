import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, selectedTodos, toggleTodo, confirmClearSelectedTodos, handleClearSelected } = useContext(TodoContext);
  const [bulkSelectMode, setBulkSelectMode] = useState(false);

  const handleToggle = (todoId) => {
    if (bulkSelectMode) {
      toggleTodo(todoId);
    } else {
      return;
    }
  };

  const handleBulkSelect = () => {
    setBulkSelectMode((prevBulkSelectMode) => !prevBulkSelectMode);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={handleBulkSelect}>{bulkSelectMode ? "Cancel Bulk Select" : "Bulk Select"}</button>
      {selectedTodos.length > 0 && (
        <>
          <button onClick={confirmClearSelectedTodos}>Clear Selected</button>
          <button onClick={handleClearSelected}>Cancel Clear</button>
        </>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {bulkSelectMode && (
              <input type="checkbox" checked={selectedTodos.includes(todo.id)} onChange={() => handleToggle(todo.id)} />
            )}
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
