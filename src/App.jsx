import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoList />
      <AddTodoItem />
    </TodoProvider>
  );
};

export default App;
