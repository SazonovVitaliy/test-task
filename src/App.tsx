import { FC } from "react";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

import "./index.css";

const App: FC = () => {
  return (
    <div className="container">
      <CreateTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
