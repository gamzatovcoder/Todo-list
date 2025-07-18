import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Todo } from "@/types/todo";

const initialState: Todo[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state: Todo[], action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodoById: (state: Todo[], action: PayloadAction<number>) => {
      const indexTodo = state.findIndex((todo) => todo.id === action.payload);
      state.splice(indexTodo, 1);
    },
  },
});
export const { addTodo, deleteTodoById } = todoListSlice.actions;

export const todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
