import React, { useState } from "react";
import Todo from "./Todo";

const Form = ({addTodo}) => {
    const clickEventInvoked = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Cannot empty");
        }
        addTodo(title,desc);
      };
  const textChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler1 = (e) => {
    setDesc(e.target.value);
  };
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  return (
    <div>
      <form onSubmit={clickEventInvoked}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter your item
          </label>
          <input
            type="text"
            value={title}
            onChange={textChangeHandler}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Please enter quantity
          </label>
          <textarea
            value={desc}
            onChange={textChangeHandler1}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-success">
          ADD TODO
        </button>
      </form>
    </div>
  );
};

export default Form;
