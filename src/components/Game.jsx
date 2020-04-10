import React from 'react';
import MoleHole from './MoleHole';

const Game=()=>{
    return(
        <div className="game-grid">
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={false}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
            <MoleHole molePoped={true}/>
        </div>
    )
}

export default Game;