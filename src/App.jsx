import './App.css';
import { useState } from 'react';
function App() {
  return (
    <>
      <Card></Card>
    </>
  )
}


//Component
function Card() {
  let [heading,getHeading] = useState(0);
  //function
  function check() {
    getHeading(++heading);
  }
  
  return (
    <>
      <h1 id="heading" onClick={check}>{heading}</h1>
    </>
  )
}


export default App;