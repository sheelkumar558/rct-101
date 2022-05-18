import React from "react";

const TodoList = ({ children }) => {
  return (
    <div>
     <ul> {children}</ul>
    </div>
  );
};

export default TodoList;
