import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, NewTodo } from "./todo.type";
import { v4 } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<NewTodo, "id">>) =>
      state.concat({
        ...action.payload,
        id: v4()
      }),
    removeTodo: (state, action: PayloadAction<string>) =>
      state.filter(({ id }) => action.payload !== id),
    clearTodos: () => []
  }
});

export const {
  reducer: todosReducer,
  actions: { addTodo, clearTodos, removeTodo }
} = todosSlice;
