import React, { createContext, useState, useEffect } from "react";

// Create the TodoContext
export const TodoContext = createContext();

// Create a TodoProvider component to wrap your app
export const TodoProvider = ({ children }) => {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contextValues = {
    todos,
    addTodo,
    removeTodo,
  };

  return <TodoContext.Provider value={contextValues}>{children}</TodoContext.Provider>;
};
