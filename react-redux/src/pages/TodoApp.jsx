//import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../store/action";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    data: todos,
  } = useSelector((state) => state.todo.getTodos);

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false,
      })
    );
  };

  useEffect(() => {
    getTodos(dispatch);
  }, []);
  if (loading) return <div>Loading.......</div>;
  else if (error) return <h1>Somthing went wrong.......</h1>;
  return (
    <div>
      <input ref={ref} type="text" placeholder="type here....." />
      <button onClick={addNew}>ADD</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
