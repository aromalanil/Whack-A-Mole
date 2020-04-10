import React,{useState} from 'react';
import MoleHole from './MoleHole';

const Game=(props)=>{
    const HoleIds =[1,2,3,4,5,6,7,8,9];
    const [selectedHole,setSelectedHole]= useState(Math.floor(Math.random() * (9 - 1 + 1) ) + 1);
    
    function moleKilled(){
        props.setScore();
        let newSelectedHole=Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
        setSelectedHole(newSelectedHole);
        console.log(newSelectedHole);  
    }
    return(
        <div className="game-grid">
            {HoleIds.map((holeId)=>{
                if(holeId===selectedHole)
                {
                    return <MoleHole key={holeId} setScore={moleKilled} molePopped={true}/>
                }
                else{
                    return <MoleHole key={holeId} setScore={moleKilled} molePopped={false}/>
                }
            })}
        </div>
    )
}

export default Game;