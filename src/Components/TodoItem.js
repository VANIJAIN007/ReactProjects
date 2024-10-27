import React from 'react'
const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
           <h1>{todo.title}</h1>
          <h1>{todo.desc}</h1>
          <h1>{todo.sno}</h1>
          <button type="button" className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>         
    </div>
  )
}

export default TodoItem
