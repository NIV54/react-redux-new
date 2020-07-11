import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/slice";

const rootReducer = combineReducers({
  todos: todosReducer
});

export type Store = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});
