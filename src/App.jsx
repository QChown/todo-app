import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";
import ConfirmationModal from "./components/ConfirmationModal";

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoList />
      <AddTodoItem />
      <ConfirmationModal />
    </TodoProvider>
  );
};

export default App;
