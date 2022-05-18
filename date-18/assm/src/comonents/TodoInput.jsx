import React, { useState } from "react";

const TodoInput = ({addTodo}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Writing Somthing"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => {
        
          addTodo(value);
          setValue("");
      }}> + </button>
    </div>
  );
};

export default TodoInput;
