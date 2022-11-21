import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, ITodos } from "../../interfaces";

const initialState: ITodos = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push({ ...action.payload, id: Math.random() });
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = [...state.todos].filter(
        (todo) => todo.id !== action.payload
      );
    },
    sortTodoByTime(state) {
      state.todos.sort((a, b) => a.timeToDo - b.timeToDo);
    },
  },
});

export const { addTodo, removeTodo, sortTodoByTime } = todoSlice.actions;
export default todoSlice.reducer;
