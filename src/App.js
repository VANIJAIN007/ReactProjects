import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Todo from './Components/Todo';
import { useState } from 'react';
import Form from './Components/Form';

function App() {
  const addTodo = (title, desc) => {
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
       sno=todos[todos.length-1].sno+1;
    }
    const addT = {
      sno,title,desc
    };
    setTodos([...todos, addT]);
  };
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos,setTodos]=useState([{
    sno:1,title:"hey", desc:"I am going to chai"
  },
  {
    sno:2,title:"wow",desc:"I am going to market"
  },
  {
    sno:3,title:"ohhoo",desc:"I am going to ghaat"
  }]);
  return (
    <div className="App">
     <Navbar />
     <h1>Todo list</h1>
     <Form addTodo={addTodo}/>
     <Todo todos={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
