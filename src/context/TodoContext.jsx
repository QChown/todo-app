import React, { createContext, useState, useEffect, useMemo } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bulkSelectMode, setBulkSelectMode] = useState(false);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setSelectedTodos((prevSelectedTodos) => {
      if (prevSelectedTodos.includes(todoId)) {
        return prevSelectedTodos.filter((id) => id !== todoId);
      } else {
        return [...prevSelectedTodos, todoId];
      }
    });
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
      setTodos((prevTodos) => {
        const remainingTodos = prevTodos.filter((todo) => !selectedTodos.includes(todo.id));
        clearSelectedTodos();
        return remainingTodos;
      });
    }
  };

  const clearTodos = () => {
    setTodos([]);
    clearSelectedTodos();
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contextValues = useMemo(() => {
    return {
      todos,
      selectedTodos,
      showConfirmationModal,
      bulkSelectMode,
      addTodo,
      removeTodo,
      toggleTodo,
      clearSelectedTodos,
      confirmClearSelectedTodos,
      handleClearSelected,
      clearTodos,
    };
  }, [todos, selectedTodos, showConfirmationModal, bulkSelectMode]);

  return <TodoContext.Provider value={contextValues}>{children}</TodoContext.Provider>;
};
