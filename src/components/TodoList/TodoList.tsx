import { FC } from "react";
import Button from "../Button/Button";
import TodoItem from "../TodoItem/TodoItem";
import Heading from "../Heading/Heading";

import { sortTodoByTime } from "../../store/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import s from "./TodoList.module.css";

const TodoList: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const handleSort = () => {
    dispatch(sortTodoByTime());
  };
  return (
    <>
      <Heading As="h2">Tasks List</Heading>
      <div className={s.headers}>
        <div className={s.type}>Type</div>
        <div className={s.description}>description</div>
        <div className={s.time}>
          Time to do
          <Button onClick={handleSort}>sort</Button>
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
