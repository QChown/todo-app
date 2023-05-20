import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bulkSelectMode, setBulkSelectMode] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    if (selectedTodos.includes(todoId)) {
      setSelectedTodos(selectedTodos.filter((id) => id !== todoId));
    } else {
      setSelectedTodos([...selectedTodos, todoId]);
    }
  };

  const clearSelectedTodos = () => {
    setSelectedTodos([]);
  };

  const confirmClearSelectedTodos = () => {
    if (selectedTodos.length > 0) {
      setShowConfirmationModal(true);
    }
  };

  const handleClearSelected = () => {
    setShowConfirmationModal(false);
    if (selectedTodos.length > 0) {
      const remainingTodos = todos.filter((todo) => !selectedTodos.includes(todo.id));
      setTodos(remainingTodos);
      setSelectedTodos([]);
    }
  };

  const clearTodos = () => {
    setTodos([]);
    setSelectedTodos([]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contextValues = {
    todos,
    selectedTodos,
    showConfirmationModal,
    bulkSelectMode,
    addTodo,
    removeTodo,
    toggleTodo,
    clearSelectedTodos,
    confirmClearSelectedTodos,
    clearTodos,
    handleClearSelected,
  };

  return <TodoContext.Provider value={contextValues}>{children}</TodoContext.Provider>;
};
