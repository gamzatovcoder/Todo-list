import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: string[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state: string[], action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteTodoByValue: (state: string[], action: PayloadAction<string>) => {
      const indexTodo = state.indexOf(action.payload);
      state.splice(indexTodo, 1);
    },
  },
});

export const { addTodo, deleteTodoByValue } = todoListSlice.actions;

export const todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
