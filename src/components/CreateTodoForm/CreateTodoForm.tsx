import { FC, useState, ChangeEvent } from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Input from "../input/Input";

import { ITodo } from "../../interfaces";
import { addTodo } from "../../store/slices/todoSlice";
import { useAppDispatch } from "../../hooks/redux";

import s from "./CreateTodoForm.module.css";

const CreateTodoForm: FC = () => {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<ITodo>({
    id: 0,
    type: "",
    description: "",
    timeToDo: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (name === "type") {
      setFormState({ ...formState, type: e.target.value });
    } else if (name === "description") {
      setFormState({ ...formState, description: e.target.value });
    } else {
      setFormState({ ...formState, timeToDo: Number(e.target.value) });
    }
  };

  const handleCreateTodo = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    if (formState.description && formState.type && formState.timeToDo) {
      dispatch(addTodo(formState));
      setFormState({ id: 0, type: "", description: "", timeToDo: 0 });
    }
  };

  return (
    <>
      <Heading As="h2"> Add Task</Heading>
      <form className={s.form}>
        <Input
          className={s.input}
          label="Task Type"
          type="text"
          name="type"
          value={formState.type}
          onChange={handleChange}
        />
        <Input
          className={s.input}
          label="Description"
          type="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
        <Input
          className={s.input}
          label="Time to do"
          type="number"
          name="time"
          value={formState.timeToDo}
          onChange={handleChange}
        />
        <Button className={s.button} onClick={handleCreateTodo}>
          ADD
        </Button>
      </form>
    </>
  );
};

export default CreateTodoForm;
