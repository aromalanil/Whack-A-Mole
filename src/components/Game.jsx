import React,{useState} from 'react';
import MoleHole from './MoleHole';

const Game=(props)=>{
    const HoleIds =[1,2,3,4,5,6,7,8,9];
    const [selectedHole,setSelectedHole]= useState(generateRandom(1,9));
    
    function moleKilled(){
        props.setScore();
        setSelectedHole(generateRandom(1,9,selectedHole)); 
    }

    function moleEscaped(){
        setSelectedHole(generateRandom(1,9,selectedHole));
    }

    return(
        <div className="game-grid">
            {HoleIds.map((holeId)=><MoleHole key={holeId} moleEscaped={moleEscaped}  setScore={moleKilled} molePopped={holeId===selectedHole}/>)}
        </div>
    )
}

function generateRandom(min, max, exclude) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if(exclude){
        return (num === exclude ) ? generateRandom(min, max, exclude) : num;
    }
    else{
        return num;
    }
}

export default Game;