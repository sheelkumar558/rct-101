import React, { useState } from "react";
import styles from "./todo.module.css";
import TodoItems from "./TodoItems";
const Todo = () => {
  let [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const onDelete=(id)=>{
   let newTodos = todos.filter((todo)=>todo.id !== id);
   setTodos(newTodos);
  }
  return (
    <div>
      Todo
      <input value={value} onChange={(e)=> setValue(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, {id:Date.now(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
      </div>
    </div>
  );
};

export default Todo;
