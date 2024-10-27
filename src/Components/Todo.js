import React from "react";
import TodoItem from "./TodoItem";
const Todo = (props) => {
  return (
    <div id="container">
      {props.todos.length == 0
        ? <h2>todo list is empty</h2>
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
export default Todo;
