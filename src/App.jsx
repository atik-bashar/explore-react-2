import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick(){
    alert('button Clicked');
  }
  
  const handleClick2 = () =>{
    alert('button 2 Clicked')
  }

  const addToFIve = (num) =>{
    alert(num + 5);
  } 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('Third click')}}>Click 3</button>
      <button onClick={()=> addToFIve(3)}>Four</button>
      
    </>
  )
}

export default App
