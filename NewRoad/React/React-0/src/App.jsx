import './App.css'

const id={
  Hi: "Hello from React",
  But: "I am a Button!!",
  img: "https://www.olivseo.com/wp-content/uploads/2016/10/photodune-8285481-the-copyright-xs-300x206.jpg"
}

function MyHello() {
  return(
    <h1>{id.Hi}</h1>
  )
}

function MyButton() {
  return (
    <button className='Btn'>{id.But}</button>
  )
}

function MyClick() {
  function handleClick() {
    prompt('Write');
  } 

  return (
    <button className='click' onClick={handleClick}>Click Me
    </button>
  )
}
let x=1
// let content=0
// if(x==1)
//   content=<MyHello/>
// else
//   content=<MyButton/>
function FirstPage() {
  return (
    <> 
    { x==1 ?
      (<MyHello />) : 
      (<MyButton />)
    }
      <img src={id.img} alt="Image" />
      <MyClick />
    </>
  )
}

function App() {
  return (
    <> 
      <FirstPage/>
    </>
  )
}

export default App
