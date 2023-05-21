import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ConfirmationModal = () => {
  const { selectedTodos, showConfirmationModal, handleClearSelected, todos } = useContext(TodoContext);

  if (!showConfirmationModal) {
    return null; 
  }

  const selectedTodoItems = selectedTodos.map((todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    return {
      id: todo.id,
      text: todo.text,
    };
  });

  return (
    <div>
      <h3>Confirm Clear Selected Todos</h3>
      <ul>
        {selectedTodoItems.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={handleClearSelected}>Clear Selected</button>
    </div>
  );
};

export default ConfirmationModal;
