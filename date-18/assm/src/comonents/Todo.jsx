import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    //todos.push(newTodo);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: newTodo,
      },
    ]);
  };
  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  };
  return (
    <div>
      Todo App
      <TodoInput addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
    </div>
  );
};
