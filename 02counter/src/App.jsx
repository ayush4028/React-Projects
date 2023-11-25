import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    // if(counter < 20){
    //   setCounter(counter + 1)
    // }
    setCounter(prev => prev + 1 > 20 ? 20 : prev + 1)

  }
  const removeValue = () => {
    // if(counter > 0){
    //   setCounter(counter - 1)
    // }
    setCounter(prev => prev - 1 < 0 ? 0 : prev - 1)

  }




  // let counter = 0;
  // let addValue = () =>{
  //   counter += 1
    
  // }
  // let removeValue = () =>{
  //   counter -= 1
    
  // }
  // This will not work because the value of counter is incrementing in console but it is not shown on UI that's why we use hooks


  return (
    <>
    <h1>Chai aur React || Ayush Singh</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    
    <br />
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
