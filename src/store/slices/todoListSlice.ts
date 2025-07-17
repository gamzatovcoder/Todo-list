import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: string[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<number>) => {},
  },
});

export const { addTodoItem } = todoListSlice.actions;

export const todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
