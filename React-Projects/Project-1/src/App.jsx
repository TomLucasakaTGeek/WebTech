import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() 
{
  
  const [todos, setTodos] = useState([
  {
    title: "Gym",
    description: "Go to gym from 7-9",
    completed: false
  },{
    title: "DSA",
    description: "Study DSA from 9-10",
    completed: true
  }
  ]);

  function addTodo(){
    setTodos([...todos, {
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div> 
      <button onClick={addTodo}>Add New</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} />
    })}
    </div>
  )

  function Todo(props){
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    )
  }


}

export default App
