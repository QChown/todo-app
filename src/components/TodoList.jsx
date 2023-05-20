import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const {
    todos,
    selectedTodos,
    toggleTodo,
    confirmClearSelectedTodos,
    clearSelectedTodos,
    bulkSelectMode,
    setBulkSelectMode,
  } = useContext(TodoContext);

  const handleToggle = (todoId) => {
    if (bulkSelectMode) {
      toggleTodo(todoId);
    }
  };

  const handleUnselectAll = () => {
    clearSelectedTodos();
  };
  const handleSelectAll = () => {
    {
      todos.map((todo) => toggleTodo(todo.id));
    }
    console.log(todos.length);
  };

  const handleBulkSelect = () => {
    if (bulkSelectMode) {
      clearSelectedTodos();
    }
    setBulkSelectMode((prevBulkSelectMode) => !prevBulkSelectMode);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length > 1 && (
        <button onClick={handleBulkSelect}>{bulkSelectMode ? "Cancel Bulk Select" : "Bulk Select"}</button>
      )}
      {selectedTodos.length > 0 && (
        <>
          <button onClick={confirmClearSelectedTodos}>Clear Selected</button>
          <button onClick={handleUnselectAll}>Unselect All</button>
        </>
      )}
      {bulkSelectMode && selectedTodos.length != todos.length && <button onClick={handleSelectAll}>Select All</button>}
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
