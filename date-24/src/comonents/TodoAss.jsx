import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoAss = () => {
  const [totolCount, setTotalCount] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
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
    axios
      .get(`http://localhost:6060/todos?_page=${page}&_limit=${limit}`)
      .then((r) => {
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      });
  }, [page,limit]);
  return (
    <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>Add</button>
      {todos.map((e) => (
        <div key={e.id}>
          {e.id} {`:`} {e.value}
        </div>
      ))}
      <button
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >{`<`}</button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button
        disabled={page * 5 > totolCount}
        onClick={() => setPage(page + 1)}
      >{`>`}</button>
    </div>
  );
};

export default TodoAss;
