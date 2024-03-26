import './App.css'
import { useState } from 'react'


function MyButton({count, onClick}) {
  return (
    <button className='click' onClick={onClick}>Clicked {count} times</button>
    )
  }
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
      setCount(count+1);
    }
    
    return (
      <div id='btn'>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <br />
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3}
]

function List() {
  const listItems = products.map(product =>
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  return (
    <>
      <Counter/>
      <List/>
    </>
  )
}

export default App
