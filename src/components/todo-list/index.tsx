import React from "react";
import { addTodo, removeTodo, clearTodos } from "../../store/todos/slice";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { Todo } from "../../store/todos/todo.type";
import { useTextInput } from "../../hooks/use-text-input";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector<Store, Todo[]>(state => state.todos);

  const { inputProps } = useTextInput(content =>
    dispatch(addTodo({ content }))
  );

  return (
    <>
      <input {...inputProps} />
      <button onClick={() => dispatch(clearTodos())}>🗑️</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => dispatch(removeTodo(todo.id))}>✔</button>
          </li>
        ))}
      </ul>
    </>
  );
};
