import React, { useState } from "react";
import styles from "./todo.module.css";
const TodoItems = ({ todo,onDelete }) => {
  const [isCompleted, setIsComleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo} key={todo.id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIsComleted(e.target.checked);
        }}
      />
      <div className={isCompleted ? styles.striked :""}>{todo.value}</div>
      <button onClick={()=> onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
