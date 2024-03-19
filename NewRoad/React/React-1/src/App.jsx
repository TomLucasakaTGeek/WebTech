import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function MyButton({count, onClick}) {
  return (
    <button className='click' onClick={onClick}>Clicked {count} times</button>
  )
}

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div id='btn'>
      <h1>Counters that update seperately</h1>
      <MyButton count={count} onClick={handleClick}/>
      <br />
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

export default App
