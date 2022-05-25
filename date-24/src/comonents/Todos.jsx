import React, { useEffect, useState } from "react";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const saveInfo = () => {
    // call api to save this information in backend
    fetch("http://localhost:6060/todos", {
      method: "POST",
      headers:{
          "content-type":"application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos,d]);
        setNewTodo("");
      });
    };

  useEffect(() => {
    fetch(`http://localhost:6060/todos?_page=${page}&_limit=5`)
      .then((r) => r.json())
      .then((d) => {
        console.log(d)
       setTodos(d);
      });
  }, [page]);
  return (
    <div>
      Todos
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>Add</button>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Todos;
