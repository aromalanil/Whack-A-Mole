import React, { useState } from 'react';
import Game from './components/Game'
import './App.css';

function App() {
  let [score,setScore]=useState(0);
  function incrementScore(){
    setScore(score+1);
  }
  return (
    <React.Fragment>
      <h1 className="title">Whack&nbsp;A&nbsp;Mole</h1>
      <Game setScore={incrementScore}/>
      <p style={{fontSize:'20px',color:'white'}}>Your Score is : {score}</p>
    </React.Fragment>
  );
}

export default App;
