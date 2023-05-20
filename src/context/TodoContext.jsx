import React, { createContext, useState, useEffect } from "react";

// Create the TodoContext
export const TodoContext = createContext();

// Create a TodoProvider component to wrap your app
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const contextValues = {
    todos,
    addTodo,
    removeTodo,
  };

  return <TodoContext.Provider value={contextValues}>{children}</TodoContext.Provider>;
};
