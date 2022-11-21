import { FC } from "react";
import Button from "../Button/Button";

import { ITodo } from "../../interfaces";
import { useAppDispatch } from "../../hooks/redux";
import { removeTodo } from "../../store/slices/todoSlice";

import s from "./TodoItem.module.css";

const TodoItem: FC<ITodo> = ({ type, description, timeToDo, id }) => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className={s.item}>
      <div className={s.type}>{type}</div>
      <div className={s.description}>{description}</div>
      <div className={s.time}>{timeToDo}</div>
      <Button className={s.button} onClick={() => handleRemove(id)}>
        x
      </Button>
    </div>
  );
};

export default TodoItem;
