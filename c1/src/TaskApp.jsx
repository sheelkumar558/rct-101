import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import data from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos,setTodo]=useState(data);
  console.log(todos)
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader todos={todos}></TaskHeader>
      <AddTask setTodo={setTodo} todos={todos}></AddTask>
      {
        todos.map((todo)=> <Task key={todo.id} data={todo} setTodo={setTodo}></Task>)
      }
     
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
