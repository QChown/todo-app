import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ConfirmationModal = () => {
  const { selectedTodos, showConfirmationModal, handleClearSelected } = useContext(TodoContext);

  if (!showConfirmationModal) {
    return null; // Don't render the modal if showConfirmationModal is false
  }

  return (
    <div>
      <h3>Confirm Clear Selected Todos</h3>
      <ul>
        {selectedTodos.map((todoId) => (
          <li key={todoId}>{todoId}</li>
        ))}
      </ul>
      <button onClick={handleClearSelected}>Clear Selected</button>
    </div>
  );
};

export default ConfirmationModal;
